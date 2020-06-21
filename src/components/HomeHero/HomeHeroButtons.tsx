import React, { MouseEventHandler } from 'react';

export type HomeHeroButtonsProps = {
  isPairing: boolean;
  handlePair?: MouseEventHandler;
  isPaired?: boolean;

  isDisconnecting?: boolean;
  handleDisconnect: MouseEventHandler;
  isDisconnected?: boolean;

  isReconnecting: boolean;
  handleReconnect: MouseEventHandler;
  isReconnected?: boolean;

  isToggling?: boolean;
  handleTogglePause?: MouseEventHandler;
  isPaused?: boolean;
};

const HomeHeroButtons = ({
  isPairing,
  handlePair,
  isPaired,

  isDisconnecting,
  handleDisconnect,
  isDisconnected,

  isReconnecting,
  handleReconnect,
  isReconnected,

  isToggling,
  handleTogglePause,
  isPaused,
}: HomeHeroButtonsProps) => (
  <>
    <p>
      {
        <button
          className={`button is-small mt-4 mr-2 ${
            isPairing ? 'is-loading ' : ''
          }`}
          disabled={isPaired}
          onClick={handlePair}
        >
          Pair your device
        </button>
      }
      {
        <button
          className={`button is-small mt-4 ml-2 ${
            isToggling ? 'is-loading ' : ''
          }`}
          disabled={!isPaired || isDisconnected}
          onClick={handleTogglePause}
        >
          {isPaired && !isDisconnected
            ? `${isPaused ? 'Start' : 'Pause'} listening`
            : 'Toggle Listening'}
        </button>
      }
    </p>
    <p>
      {
        <button
          className={`button is-small mt-4 mr-2 ${
            isDisconnecting ? 'is-loading ' : ''
          }`}
          disabled={!isPaired || isDisconnected}
          onClick={handleDisconnect}
        >
          Disconnect your device
        </button>
      }
      {
        <button
          className={`button is-small mt-4 ml-2 ${
            isReconnecting ? 'is-loading ' : ''
          }`}
          disabled={!isPaired || isReconnected}
          onClick={handleReconnect}
        >
          Reconnect your device
        </button>
      }
    </p>
  </>
);

export default HomeHeroButtons;
