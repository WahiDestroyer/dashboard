import React from "react";
import StatCard from "../Components/Dashboard/StatCard";
import SalesPerformance from "../Components/Dashboard/SalesPerformance";
import BestSellers from "../Components/Dashboard/BestSellers";
import RecentPurchases from "../Components/Dashboard/RecentPurchases";
import MarketOverview from "../Components/Dashboard/MarketOverview";
import VisitsBySource from "../Components/Dashboard/VisitsBySource";
import RevenueTrend from "../Components/Dashboard/RevenueTrend";
import {
  statCards,
  salesPerformance,
  bestSellers,
  purchases,
  marketOverview,
  visitSources,
  revenueTrend,
} from "../Components/Dashboard/data";

const Home = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm muted">Overview</p>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="text-xs mt-1 text-[var(--muted)]">
            Home <span className="text-[var(--accent)]">/ Dashboard</span>
          </div>
        </div>
        <div className="pill text-xs">
          <span role="img" aria-label="calendar">
            📅
          </span>
          Feb 16, 2022 – Feb 20, 2022
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <SalesPerformance data={salesPerformance} />
        </div>
        <BestSellers sellers={bestSellers} />
      </div>

      <RecentPurchases rows={purchases} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <MarketOverview data={marketOverview} />
        <VisitsBySource data={visitSources} />
        <RevenueTrend data={revenueTrend} />
      </div>
    </div>
  );
};

export default Home;
