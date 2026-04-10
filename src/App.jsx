import { MarketingSite } from "./components/MarketingSite";
import { PhoneFrame } from "./components/PhoneFrame";
import { AppStateProvider, useAppState } from "./context/AppState";
import { BudgetScreen } from "./screens/BudgetScreen";
import { CaaScreen } from "./screens/CaaScreen";
import { CampaignScreen } from "./screens/CampaignScreen";
import { ConnectScreen } from "./screens/ConnectScreen";
import { CreatorDashboardScreen } from "./screens/CreatorDashboardScreen";
import { FaaScreen } from "./screens/FaaScreen";
import { FanWalletScreen } from "./screens/FanWalletScreen";
import { FeedScreen } from "./screens/FeedScreen";
import { LandingScreen } from "./screens/LandingScreen";
import { SupportersScreen } from "./screens/SupportersScreen";

const screenMap = {
  landing: LandingScreen,
  connect: ConnectScreen,
  budget: BudgetScreen,
  feed: FeedScreen,
  "fan-wallet": FanWalletScreen,
  faa: FaaScreen,
  "creator-dashboard": CreatorDashboardScreen,
  caa: CaaScreen,
  supporters: SupportersScreen,
  campaign: CampaignScreen,
};

function AppShell() {
  const { state } = useAppState();
  const ActiveScreen = screenMap[state.screen] ?? LandingScreen;
  const statusText = state.connected
    ? state.demoMode
      ? "Demo Connected"
      : "Wallet Connected"
    : "HioEmo Live Prototype";

  return (
    <div className="site-shell">
      <div className="site-grid">
        <MarketingSite />
        <PhoneFrame statusText={statusText}>
          <ActiveScreen />
        </PhoneFrame>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <AppShell />
    </AppStateProvider>
  );
}