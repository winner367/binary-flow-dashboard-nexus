
import { Card } from "@/components/ui/card";

export default function MarketAnalysis() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Market Analysis</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Price Chart</h2>
          <div className="h-[400px] flex items-center justify-center bg-muted">
            Chart Component Coming Soon
          </div>
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Market Indicators</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>RSI</span>
              <span className="font-semibold">65.4</span>
            </div>
            <div className="flex justify-between">
              <span>MACD</span>
              <span className="font-semibold">Bullish</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
