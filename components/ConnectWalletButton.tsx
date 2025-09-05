'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { useEffect } from 'react';

interface ConnectWalletButtonProps {
  variant?: 'default';
}

export function ConnectWalletButton({ variant = 'default' }: ConnectWalletButtonProps) {
  const { setFrameReady } = useMiniKit();

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  return (
    <div className="flex justify-center mb-6">
      <Wallet>
        <ConnectWallet className="btn-primary">
          <Name className="text-white" />
        </ConnectWallet>
      </Wallet>
    </div>
  );
}
