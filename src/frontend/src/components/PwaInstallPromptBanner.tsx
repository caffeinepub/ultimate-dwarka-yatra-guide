import { X, Download, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePwaInstallPrompt } from '../hooks/usePwaInstallPrompt';

export default function PwaInstallPromptBanner() {
  const { isInstallable, isIOS, shouldShowPrompt, promptInstall, dismissPrompt } = usePwaInstallPrompt();

  if (!shouldShowPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 mx-4 mb-2 animate-in slide-in-from-bottom-5">
      <div className="bg-gradient-to-r from-saffron to-ocean text-white rounded-lg shadow-2xl p-4 border-2 border-white/20">
        <button
          onClick={dismissPrompt}
          className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-start gap-3 pr-6">
          <div className="flex-shrink-0 mt-1">
            {isIOS ? (
              <Share className="h-6 w-6" />
            ) : (
              <Download className="h-6 w-6" />
            )}
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="font-semibold text-sm">
              📲 Install App for Offline Use
            </div>
            
            {isIOS ? (
              <div className="text-xs opacity-90 space-y-1">
                <p>Tap the <Share className="inline h-3 w-3 mx-0.5" /> Share button below,</p>
                <p>then select "Add to Home Screen"</p>
              </div>
            ) : (
              <div className="text-xs opacity-90">
                Access the guide anytime, even without internet
              </div>
            )}
            
            {isInstallable && !isIOS && (
              <Button
                onClick={promptInstall}
                size="sm"
                className="bg-white text-saffron hover:bg-white/90 font-semibold mt-2"
              >
                Install Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
