import {
  useTrendingCollections,
  TrendingCollectionsTimePeriod,
} from "@quicknode/icy-nft-hooks";
import { useState, useEffect } from "react";

function Collections() {
  const [cursor, setCursor] = useState("");
  const [timePeriod, setTimePeriod] = useState(
    TrendingCollectionsTimePeriod.TWELVE_HOURS
  );
  const [orderBy, setOrderBy] = useState("VOLUME");
  const [orderDir, setOrderDir] = useState("DESC");
  const { collections, pageInfo } = useTrendingCollections({
    orderBy: orderBy,
    orderDirection: orderDir,
    timePeriod: timePeriod,
    first: 10,
    after: cursor,
  });

  return (
    <div className="App bg-black text-white flex flex-col justify-start items-center gap-10">
      <div className="w-full h-full flex flex-col justify-start gap-5 items-center">
        <h1 className="text-7xl font-bold">NFT Market Dashboard</h1>
        <h3 className="text-xl font-semibold">
          Powered by{" "}
          <a
            className="underline"
            href="https://docs.icy.tools/developer-api/api-reference"
          >
            QuickNode's GraphQL NFT API
          </a>
        </h3>
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-center">
        <div className="w-full h-full flex flex-col sm:flex-row justify-evenly items-center">
          <div className="w-full flex justify-start gap-3">
            <div className="text-xl">Stats in last</div>
            <button
              className="text-xl text-cyan-500"
              onClick={() =>
                setTimePeriod(TrendingCollectionsTimePeriod.TWELVE_HOURS)
              }
            >
              12 hours
            </button>
            <button
              className="text-xl text-cyan-500"
              onClick={() =>
                setTimePeriod(TrendingCollectionsTimePeriod.ONE_HOUR)
              }
            >
              1 hour
            </button>
            <button
              className="text-xl text-cyan-500"
              onClick={() =>
                setTimePeriod(TrendingCollectionsTimePeriod.ONE_DAY)
              }
            >
              1 day
            </button>
            <button
              className="text-xl text-cyan-500"
              onClick={() =>
                setTimePeriod(TrendingCollectionsTimePeriod.SEVEN_DAYS)
              }
            >
              7 days
            </button>
          </div>
          <div className="w-full flex justify-start gap-3">
            <div className="text-xl">Order By</div>
            <button
              className="text-xl text-cyan-500"
              onClick={() => setOrderBy("SALES")}
            >
              Sales
            </button>
            <button
              className="text-xl text-cyan-500"
              onClick={() => setOrderBy("AVERAGE")}
            >
              Average
            </button>
            <button
              className="text-xl text-cyan-500"
              onClick={() => setOrderBy("VOLUME")}
            >
              Volume
            </button>
          </div>
          <fieldset className="w-full flex justify-start gap-3">
            <div className="text-xl">Order Direction</div>
            <input
              id="desc"
              type="radio"
              name="orderDir"
              className="text-xl text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onClick={() => setOrderDir("DESC")}
            />
            <label htmlFor="desc" className="text-xl text-cyan-500">
              Descending
            </label>
            <input
              id="asc"
              type="radio"
              name="orderDir"
              className="text-xl text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onClick={() => setOrderDir("ASC")}
            />
            <label htmlFor="asc" className="text-xl text-cyan-500">
              Ascending
            </label>
          </fieldset>
        </div>
        <table className="table-auto border-separate border border-slate-400 w-full text-sm text-left text-white my-5">
          <thead className="table-header-group text-xl">
            <tr className="table-row">
              <th scope="col" className="table-cell text-left px-6 py-3">
                Collection
              </th>
              <th scope="col" className="table-cell text-right px-6 py-3">
                Floor
              </th>
              <th scope="col" className="table-cell text-right px-6 py-3">
                Volume
              </th>
              <th scope="col" className="table-cell text-right px-6 py-3">
                Total Sales
              </th>
              <th scope="col" className="table-cell text-right px-6 py-3">
                Average
              </th>
            </tr>
          </thead>
          <tbody>
            {collections &&
              collections.map((collection) => {
                return (
                  <tr
                    key={collection.address}
                    className="table-row odd:bg-gray-800 odd:border-gray-700 even:bg-gray-900 even:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="table-cell text-left  px-6 py-2 font-medium text-white whitespace-nowrap "
                    >
                      {collection.name}
                    </th>
                    <td className="table-cell text-right px-6 py-2  mono">
                      Ξ{collection.stats.floor.toFixed(3)}
                    </td>
                    <td className="table-cell text-right px-6 py-2  mono">
                      Ξ{collection.stats.volume.toFixed(3)}
                    </td>
                    <td className="table-cell text-right px-6 py-2  mono">
                      {collection.stats.totalSales}
                    </td>
                    <td className="table-cell text-right px-6 py-2  mono">
                      Ξ{collection.stats.average.toFixed(3)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {pageInfo?.hasNextPage && (
          <div className="w-full flex items-center justify-end">
            <button
              onClick={() => {
                setCursor(pageInfo.endCursor ?? undefined);
              }}
              className="rounded-md bg-blue-900 p-5"
            >
              Next &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collections;
