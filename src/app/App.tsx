import React, { useState } from 'react';
import { BottomNav } from './components/layout/BottomNav';
import { HomeView } from './components/views/HomeView';
import { StoreView } from './components/views/StoreView';
import { CommunityView } from './components/views/CommunityView';
import { ProfileView } from './components/views/ProfileView';
import { ExperienceView } from './components/views/ExperienceView';
import { IntroView } from './components/views/IntroView';
import { DinnerEvent } from './components/views/DinnerEvent';
import { CoBuilderApplyView } from './components/views/CoBuilderApplyView';
import { CoCreationContentView } from './components/views/CoCreationContentView';
import { DiscoveryView } from './components/views/DiscoveryView';
import { PartnerApplyView } from './components/views/PartnerApplyView';
import { LiveStreamView } from './components/views/LiveStreamView';
import { AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  if (!isLoggedIn) {
    return <IntroView onComplete={() => setIsLoggedIn(true)} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onChangeView={setCurrentView} />;
      case 'store':
        return <StoreView />;
      case 'gift-concierge':
        return <StoreView initialGiftConcierge />;
      case 'product-white-truffle':
        return <StoreView initialProductId={5} />;
      case 'community':
        return <CommunityView />;
      case 'discovery':
        return <DiscoveryView onBack={() => setCurrentView('home')} />;
      case 'profile':
        return <ProfileView />;
      case 'experience':
        return <ExperienceView />;
      case 'dinner-event':
        return <DinnerEvent onBack={() => setCurrentView('home')} />;
      case 'co-creation-content':
        return <CoCreationContentView onBack={() => setCurrentView('home')} />;
      case 'co-builder-apply':
        return <CoBuilderApplyView onBack={() => setCurrentView('home')} />;
      case 'live-stream':
        return <LiveStreamView onBack={() => setCurrentView('home')} />;
      case 'merchant-apply':
        return <PartnerApplyView type="merchant" onBack={() => setCurrentView('home')} />;
      case 'supplier-apply':
        return <PartnerApplyView type="supplier" onBack={() => setCurrentView('home')} />;
      default:
        return <HomeView onChangeView={setCurrentView} />;
    }
  };

  const navView = ['gift-concierge', 'product-white-truffle'].includes(currentView) ? 'store' : currentView;
  const fullScreenViews = ['dinner-event', 'co-builder-apply', 'co-creation-content', 'discovery', 'merchant-apply', 'supplier-apply', 'live-stream'];

  return (
    <div className="bg-stone-100 min-h-screen flex justify-center">
      <div className="w-full max-w-md bg-stone-50 shadow-2xl min-h-screen relative overflow-hidden">
        {renderView()}
        {!fullScreenViews.includes(currentView) && (
          <BottomNav currentView={navView} onChangeView={setCurrentView} />
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
