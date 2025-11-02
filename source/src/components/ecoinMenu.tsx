import React, { useState, useRef, useEffect, ChangeEvent } from 'react';

const EID_STORAGE_KEY = "eid";
let initialEid = window.localStorage.getItem(EID_STORAGE_KEY) || "";

const handleClearAndReload = () => {
  console.log("Clearing storage and reloading...");
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing local storage:", error);
  }
  try {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      name = name.trim();
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  } catch (error) {
    console.error("Error clearing cookies:", error);
  }
  window.location.reload();
};

const ECoinMenu = ({ walletConnected, setWalletConnected }) => {
  const [eid, seteid] = useState<string>(initialEid);
  const [eidAccessVerified, seteidAccessVerified] = useState(false);
  const [isCreatingNewEID, setIsCreatingNewEID] = useState(false);
  const [isUsingExistingEID, setIsUsingNewEID] = useState(false);
  const [failedToVerify, setFailedtoVerify] = useState(false);
  const [wallet, setWallet] = useState<any>({});
  const [enetStats, setEnetStats] = useState<any>({
    global: {
      totalWorkers: 0,
      activeWorkers: 0,
      claimedTasks: 0,
      queuedTasks: 0,
    },
    user: {
      totalWorkers: 0,
      requests: [],
      contributions: [],
    }
  });

  const eidInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(
      "https://api.easter.company/enet/stats",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: window.localStorage.getItem("eid")
        })
      }
    ).then((req) => req.json()).then(json => {
      setEnetStats(json);
    });
  }, []);

  const handleUploadClick = () => {
    eidInput.current?.click();
  };

  const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0]; // Get the first selected file
      console.log('File selected:', {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        lastModified: selectedFile.lastModified,
      });
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const fileContent = loadEvent.target?.result;
        console.log('.eid file content loaded successfully.');
        const _eid = fileContent?.toString()
        if (_eid) {
          initialEid = _eid;
          window.localStorage.setItem('eid', _eid);
          seteid(_eid);
        }
      };
      reader.onerror = (error) => {
        console.error('Error reading .eid file:', error);
      };
      reader.readAsText(selectedFile);
    } else {
      console.log('No file selected or selection cancelled.');
    }
    if (event.target) {
      event.target.value = '';
    }
  };

  async function handleFetchAndStoreNewEid(): Promise<void> {
    try {
      const apiUrl: string = "https://api.easter.company/enet/new_wallet";
      const apiResponse = await fetch(apiUrl);
      const eidText: string = await apiResponse.text();
      window.localStorage.setItem(EID_STORAGE_KEY, eidText);
      initialEid = window.localStorage.getItem(EID_STORAGE_KEY) || "";
      setFailedtoVerify(false);
      setIsUsingNewEID(false);
      setIsCreatingNewEID(false);
      seteid(eidText);
      seteidAccessVerified(false);
      return;
    } catch {
      setFailedtoVerify(true);
      setIsUsingNewEID(false);
      setIsCreatingNewEID(false);
      seteid('');
      seteidAccessVerified(false);
      return;
    }
  }

  const handleVerifyEID = async (): Promise<void> => {
    try {
      const apiUrl: string = "https://api.easter.company/enet/refresh_wallet";
      const apiResponse = await fetch(apiUrl, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'data': eid }),
      });
      const r = await apiResponse.json();
      if (apiResponse.ok) {
        setFailedtoVerify(false);
        setIsUsingNewEID(false);
        setIsCreatingNewEID(false);
        seteidAccessVerified(true);
        setWallet((c: any) => {
          return {
            ...c,
            ...r,
          };
        });
        return setWalletConnected(true);
      } else {
        setIsUsingNewEID(false);
        setIsCreatingNewEID(false);
        seteidAccessVerified(false);
        setFailedtoVerify(true);
        return;
      }
    } catch { }
    window.localStorage.removeItem(EID_STORAGE_KEY);
    setIsUsingNewEID(false);
    setIsCreatingNewEID(false);
    seteidAccessVerified(false);
    seteid("");
    return;
  }

  const ECoinHeaderHr = () => {
    return <div style={{
      width: '86px',
      maxWidth: '86px',
      height: '0',
      border: '1px solid #dadada33',
      margin: 'auto auto',
    }} />
  };

  const ECoinWalletNoEID = () => {
    return <div id="no-eid-cont" className="cd c" style={{ width: "100%" }}>
      {
        isUsingExistingEID ? <>
          <h1 style={{ margin: "1%", width: "100%" }}>Enter Your eID</h1>
          <p>All your devices should share the same personal eID.</p>
          <input
            type="file"
            id="eid-input"
            ref={eidInput}
            onChange={handleFileSelected}
            style={{ display: 'none' }}
            accept=".eid"
          />
          <button
            type="button"
            onClick={handleUploadClick}
          >Upload eid file</button>
        </> :
          isCreatingNewEID ? <>
            <h1 style={{ margin: "5%", width: "100%" }}>Creating New EID</h1>
            <p>One moment please...</p>
          </> : <>
            <h1 style={{ margin: "5%", width: "100%" }}>No eID for this device.</h1>
            <p>You need an identity to begin using the network.</p>
            <div id="no-eid-btns" className="cd c" style={{ width: "100%" }}>
              <button type="button" onClick={() => {
                setIsCreatingNewEID(true);
                handleFetchAndStoreNewEid();
              }}>Create New EID</button>
              <button type="button" onClick={() => {
                setIsUsingNewEID(true);
              }}>Use Existing EID</button>
            </div>
          </>
      }
    </div>
  }

  const ECoinVerifyEIDAccess = () => {
    handleVerifyEID();
    return <div id="no-eid-cont" className="cd c">
      <h1>Verifying identity</h1>
      <p>One moment...</p>
    </div>
  }

  const ECoinWalletMasterDown = () => {
    return <div id="no-eid-cont" className="cd c">
      <h1>We're having trouble...</h1>
      <button
        onClick={handleClearAndReload}
        style={{
          minWidth: "300px",
          width: "90%",
          maxWidth: "600px",
          backgroundColor: "rgba(29,20,20,0.98)",
          fontSize: "15px",
          marginTop: "28px",
        }}
      >Logout</button>
    </div>
  }

  const handleDownloadClick = () => {
    try {
      const eidContent = localStorage.getItem('eid');
      if (eidContent === null) {
        alert("Error: No 'eid' data found in local storage.");
        console.warn("localStorage key 'eid' not found.");
        return;
      }
      const blob = new Blob([eidContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '.eid');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download EID data:", error);
      alert("An error occurred while trying to download the data. Check console for details.");
    }
  };

  const ECoinWallet = () => {
    return <div id="global-menu-content">
      <div id="ecoin-header" className="ecoin-profile-header">
        <div id="ecoin-balance-container" className="ecoin-profile-container">
          <h2 id="ecoin-balance-title" className="ecoin-profile-title">Your Balance</h2>
          <h3 id="ecoin-balance" className="ecoin-profile-info">{((0 + wallet.totalIncome) - (wallet.totalOutgoings)).toFixed(4)}&nbsp;<i className='bx bxs-coin-stack' ></i></h3>
          <h4 id="ecoin-in-out" className="ecoin-profile-subinfo">+0%</h4>
          <h5 id="ecoin-in-out-title" className="ecoin-profile-subtitle">Last 30 days</h5>
        </div>
        <ECoinHeaderHr />
        <div id="ecoin-value-container" className="ecoin-profile-container">
          <h2 id="ecoin-value-title" className="ecoin-profile-title">Single Coin Value</h2>
          <h2 id="ecoin-value" className="ecoin-profile-info">0.149</h2>
          <h4 id="ecoin-delta" className="ecoin-profile-subinfo">+0%</h4>
          <h5 id="ecoin-delta-title" className="ecoin-profile-subtitle">Last 30 days</h5>
        </div>
        <ECoinHeaderHr />
        <div id="ecoin-total-container" className="ecoin-profile-container">
          <h2 id="ecoin-total-title" className="ecoin-profile-title">Total Balance Value</h2>
          <h2 id="ecoin-total" className="ecoin-profile-info">£&nbsp;{`${(((0 + wallet.totalIncome) - (wallet.totalOutgoings)) * 0.149).toFixed(4)}`}</h2>
          <h4 id="ecoin-total-delta" className="ecoin-profile-subinfo">+0%</h4>
          <h5 id="ecoin-total-delta-title" className="ecoin-profile-subtitle">Last 30 days</h5>
        </div>
      </div>
      <div id="enet-contrib-header" className="ecoin-profile-header">
        <div id="enet-current-contrib-container" className="ecoin-profile-container">
          <h2 id="enet-current-contrib-title" className="ecoin-profile-title">Current Tasks</h2>
          <h3 id="enet-current-contrib" className="ecoin-profile-info">{enetStats.user.contributions.length}</h3>
          <h4 id="enet-current-contrib-delta" className="ecoin-profile-subinfo">+0%</h4>
          <h5 id="enet-current-contrib-delta-title" className="ecoin-profile-subtitle">Average</h5>
        </div>
        <ECoinHeaderHr />
        <div id="enet-total-contrib-container" className="ecoin-profile-container">
          <h2 id="enet-total-contrib-title" className="ecoin-profile-title">Total Contributions</h2>
          <h3 id="enet-total-contrib" className="ecoin-profile-info">{wallet.totalContributions}</h3>
          <h4 id="enet-total-contrib-delta" className="ecoin-profile-subinfo">+0%</h4>
          <h5 id="enet-total-contrib-delta-title" className="ecoin-profile-subtitle">Last 30 Days</h5>
        </div>
        <ECoinHeaderHr />
        <div className="ecoin-profile-container">
          <h2 className="ecoin-profile-title">Total Income</h2>
          <h3 className="ecoin-profile-info">{wallet.totalIncome.toFixed(4)}</h3>
          <h4 className="ecoin-profile-subinfo">+0%</h4>
          <h5 className="ecoin-profile-subtitle">Last 30 days</h5>
        </div>
      </div>
      <div id="enet-req-header" className="ecoin-profile-header">
        <div id="enet-current-req-container" className="ecoin-profile-container">
          <h2 id="enet-current-req-title" className="ecoin-profile-title">Current Requests</h2>
          <h3 id="enet-current-req" className="ecoin-profile-info">{enetStats.user.requests.length}</h3>
          <h4 id="enet-current-req-delta" className="ecoin-profile-subinfo">+0%</h4>
          <h5 id="enet-current-req-delta-title" className="ecoin-profile-subtitle">Average</h5>
        </div>
        <ECoinHeaderHr />
        <div id="enet-total-req-container" className="ecoin-profile-container">
          <h2 id="enet-total-req-title" className="ecoin-profile-title">Total Requests</h2>
          <h3 id="enet-total-req" className="ecoin-profile-info">{wallet.totalRequests}</h3>
          <h4 id="enet-total-req-delta" className="ecoin-profile-subinfo">+0%</h4>
          <h5 id="enet-total-req-delta-title" className="ecoin-profile-subtitle">Last 30 days</h5>
        </div>
        <ECoinHeaderHr />
        <div id="enet-req-cost-container" className="ecoin-profile-container">
          <h2 id="enet-req-cost-title" className="ecoin-profile-title">Total Outgoings</h2>
          <h3 id="enet-req-cost" className="ecoin-profile-info">{wallet.totalOutgoings.toFixed(4)}</h3>
          <h4 id="enet-req-cost-delta" className="ecoin-profile-subinfo">+0%</h4>
          <h5 id="enet-req-cost-delta-title" className="ecoin-profile-subtitle">Last 30 days</h5>
        </div>
      </div>
      <div id="wallet-options">
        <button onClick={handleDownloadClick}><i className='bx bxs-user-badge' ></i><p>&nbsp;Download Identifier</p></button>
        <button onClick={handleClearAndReload}><i className='bx bx-exit' ></i><p>&nbsp;Logout</p></button>
      </div>
    </div>
  }

  return <div id="global-menu" className="glassy">
    {
      failedToVerify ? <ECoinWalletMasterDown /> :
        eid === '' ? <ECoinWalletNoEID /> :
          (eid.length > 0 && !eidAccessVerified) ? <>
            <ECoinVerifyEIDAccess />
          </>
            :
            <ECoinWallet />
    }
  </div>
};

export default ECoinMenu;

