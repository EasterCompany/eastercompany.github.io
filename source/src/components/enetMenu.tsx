import React, { useState, useEffect } from "react";

const ENetMenu = () => {
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

  const ECoinActiveTransactionsTable = ({ transactions }) => {
    return <div className="ecoin-profile-table">
      <div className="ecoin-profile-table-row">
        <p>id</p>
        <p>origin</p>
        <p>dest.</p>
        <p>value</p>
        <p>tax</p>
        <p>type</p>
        <p>created</p>
      </div>
      {
        transactions.map((t: any) => {
          return <ECoinTransactionRecord transactionId={t.transactionId} transactionData={t.transactionData} />
        })
      }
    </div >
  };

  const Hr = () => {
    return <div style={{
      width: '86px',
      maxWidth: '86px',
      height: '0',
      border: '1px solid #dadada33',
      margin: 'auto auto',
    }} />
  };

  return <div id="global-menu">
    <div id="global-menu-content">
      <div className="ecoin-profile-header">
        <div className="ecoin-profile-container">
          <h2 className="ecoin-profile-title">Global</h2>
          <h2 className="ecoin-profile-info">{enetStats?.global?.claimedTasks}/{enetStats?.global?.totalWorkers}</h2>
          <h4 className="ecoin-profile-subinfo">Workers</h4>
          <h5 className="ecoin-profile-subtitle">Active/Total</h5>
        </div>
        <Hr />
        <div className="ecoin-profile-container">
          <h2 className="ecoin-profile-title">Global</h2>
          <h2 className="ecoin-profile-info">{enetStats?.global?.claimedTasks}</h2>
          <h4 className="ecoin-profile-subinfo">Tasks</h4>
          <h5 className="ecoin-profile-subtitle">In-Progress</h5>
        </div>
        <Hr />
        <div className="ecoin-profile-container">
          <h2 className="ecoin-profile-title">Global</h2>
          <h2 className="ecoin-profile-info">{enetStats?.global?.queuedTasks}</h2>
          <h4 className="ecoin-profile-subinfo">Queue</h4>
          <h5 className="ecoin-profile-subtitle">Pending</h5>
        </div>
      </div>
      <h2>Requests</h2>
      <ECoinActiveTransactionsTable transactions={enetStats?.user?.requests} />
      <div className="ecoin-profile-header">
        <div className="ecoin-profile-container">
          <h2 className="ecoin-profile-title">Personal</h2>
          <h2 className="ecoin-profile-info">{enetStats?.user?.contributions.length}/{enetStats?.user?.totalWorkers}</h2>
          <h4 className="ecoin-profile-subinfo">Workers</h4>
          <h5 className="ecoin-profile-subtitle">Active/Total</h5>
        </div>
        <Hr />
        <div className="ecoin-profile-container">
          <h2 className="ecoin-profile-title">Personal</h2>
          <h2 className="ecoin-profile-info">{enetStats?.user?.requests.length}</h2>
          <h4 className="ecoin-profile-subinfo">Requests</h4>
          <h5 className="ecoin-profile-subtitle">In-Progress</h5>
        </div>
        <Hr />
        <div className="ecoin-profile-container">
          <h2 className="ecoin-profile-title">Personal</h2>
          <h2 className="ecoin-profile-info">{enetStats?.user?.contributions.length}</h2>
          <h4 className="ecoin-profile-subinfo">Tasks</h4>
          <h5 className="ecoin-profile-subtitle">In-Progress</h5>
        </div>
      </div>
      <h2>Contributions</h2>
      <ECoinActiveTransactionsTable transactions={enetStats?.user?.contributions} />
    </div>
  </div>
}

const ECoinTransactionRecord = ({ transactionId, transactionData }) => {

  const formatTimeAgoInSeconds = (unixTimestamp: string) => {
    const nowSeconds = Date.now() / 1000;
    const differenceInSeconds = Math.floor(nowSeconds - parseFloat(unixTimestamp));
    if (differenceInSeconds < 0) {
      return "just now";
    } else if (differenceInSeconds === 0) {
      return "just now";
    } else if (differenceInSeconds === 1) {
      return "1 second ago";
    } else {
      return `${differenceInSeconds} seconds ago`;
    }
  }

  return <div className="ecoin-profile-table-row">
    <p>{transactionId.substr(transactionId.length - 8)}</p>
    {
      transactionData === null ? <>
        <p>-</p>
        <p>-</p>
        <p>-</p>
        <p>-</p>
      </> : <>
        <p>{transactionData.origin}</p>
        <p>{transactionData.destination}</p>
        <p>{transactionData.value - (transactionData.value * transactionData.tax)}</p>
        <p>{transactionData.value * transactionData.tax}</p>
        <p>{transactionData.type}</p>
        <p>{formatTimeAgoInSeconds(transactionData.created)}</p>
      </>
    }
  </div>
};

export default ENetMenu;
