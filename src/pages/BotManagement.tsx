
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BotManagement() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bot Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-4">
          <h3 className="font-semibold mb-2">EUR/USD Bot</h3>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Status: Active</p>
            <p className="text-sm text-muted-foreground">Profit: +$124.50</p>
            <Button variant="outline" className="w-full">Stop Bot</Button>
          </div>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">GBP/JPY Bot</h3>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Status: Inactive</p>
            <p className="text-sm text-muted-foreground">Profit: $0</p>
            <Button className="w-full">Start Bot</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
