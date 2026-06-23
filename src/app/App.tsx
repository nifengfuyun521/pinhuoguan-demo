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
      case 'community':
        return <CommunityView />;
      case 'profile':
        return <ProfileView />;
      case 'experience':
        return <ExperienceView />;
      case 'dinner-event':
        return <DinnerEvent onBack={() => setCurrentView('home')} />;
      case 'co-builder-apply':
        return <CoBuilderApplyView onBack={() => setCurrentView('home')} />;
      default:
        return <HomeView onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="bg-stone-100 min-h-screen flex justify-center">
      <div className="w-full max-w-md bg-stone-50 shadow-2xl min-h-screen relative overflow-hidden">
        {renderView()}
        {currentView !== 'dinner-event' && currentView !== 'co-builder-apply' && (
          <BottomNav currentView={currentView} onChangeView={setCurrentView} />
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
