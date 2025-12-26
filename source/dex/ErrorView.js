// 404 Error View Component - Restoring Historical Style
export const getErrorContent = () => `
    <div style="margin: auto auto; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
        <svg viewBox="0 0 10 2" style="width: 100%; height: 25vh; background-color: transparent; user-select: none;">
          <text
            x="5"
            y="1"
            text-anchor="middle"
            font-size="1"
            fill="none"
            stroke-width=".015"
            stroke="#fff"
            font-family="sans-serif"
          >
            404
          </text>
        </svg>
        <a href="/" style="width: 300px; margin: 0 auto; text-decoration: none; display: block; cursor: pointer;">
          <h1
            style="
              width: 100%;
              text-align: center;
              margin: 0;
              padding: 0;
              font-size: 22px;
              color: #bbb;
              font-weight: 500;
            "
          >
            Page Not Found.
          </h1>
          <h2
            style="
              width: 100%;
              text-align: center;
              margin: 10px 0 0 0;
              padding: 0;
              font-size: 18px;
              color: #999;
              font-weight: 400;
            "
          >
            Click Here To Return Home
          </h2>
        </a>
    </div>
`;

export function attachErrorListeners() {
    // Standard link behavior handles navigation
}