'use strict';

let suprchatTemplate = `<yt-live-chat-paid-message-renderer class="style-scope yt-live-chat-item-list-renderer" id="@Id@" allow-animations="" style="@Color@">
<div id="card" class="style-scope yt-live-chat-paid-message-renderer">
  <div id="header" class="style-scope yt-live-chat-paid-message-renderer">
    <yt-img-shadow id="author-photo" height="40" width="40" class="style-scope yt-live-chat-paid-message-renderer no-transition" loaded="" style="background-color: transparent;">
      <img id="img" class="style-scope yt-img-shadow" alt="" height="40" width="40" src="@Img@">
    </yt-img-shadow>
    <dom-if restamp="" class="style-scope yt-live-chat-paid-message-renderer">
      <template is="dom-if"></template>
    </dom-if>
    <dom-if class="style-scope yt-live-chat-paid-message-renderer">
      <template is="dom-if"></template>
    </dom-if>
    <div id="header-content" class="style-scope yt-live-chat-paid-message-renderer">
      <div id="header-content-primary-column" class="style-scope yt-live-chat-paid-message-renderer">
        <div id="author-name" class="style-scope yt-live-chat-paid-message-renderer">@Name@</div>
        <div id="purchase-amount-column" class="style-scope yt-live-chat-paid-message-renderer">
          <yt-img-shadow id="currency-img" height="16" width="16" class="style-scope yt-live-chat-paid-message-renderer no-transition" hidden="">
            <img id="img" class="style-scope yt-img-shadow" alt="" height="16" width="16">
          </yt-img-shadow>
          <div id="purchase-amount" class="style-scope yt-live-chat-paid-message-renderer">
            <yt-formatted-string class="style-scope yt-live-chat-paid-message-renderer">￥500</yt-formatted-string>
          </div>
        </div>
      </div>
      <span id="timestamp" class="style-scope yt-live-chat-paid-message-renderer">@Time@</span>
    </div>
    <div id="menu" class="style-scope yt-live-chat-paid-message-renderer">
      <yt-icon-button id="menu-button" class="style-scope yt-live-chat-paid-message-renderer" touch-feedback="">
        <button id="button" class="style-scope yt-icon-button" aria-label="コメントの操作">
          <yt-icon icon="more_vert" class="style-scope yt-live-chat-paid-message-renderer">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
              <g class="style-scope yt-icon">
                <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z" class="style-scope yt-icon"></path>
              </g>
            </svg>
          </yt-icon>
        </button>
        <yt-interaction id="interaction" class="circular style-scope yt-icon-button">
          <div class="stroke style-scope yt-interaction"></div>
          <div class="fill style-scope yt-interaction"></div>
        </yt-interaction>
      </yt-icon-button>
    </div>
  </div>
  <div id="content" class="style-scope yt-live-chat-paid-message-renderer">
    <div id="message" dir="auto" class="style-scope yt-live-chat-paid-message-renderer">@Comment@</div>
    <div id="input-container" class="style-scope yt-live-chat-paid-message-renderer">
      <dom-if class="style-scope yt-live-chat-paid-message-renderer">
        <template is="dom-if"></template>
      </dom-if>
    </div>
    <yt-formatted-string id="deleted-state" class="style-scope yt-live-chat-paid-message-renderer">
    </yt-formatted-string>
    <div id="footer" class="style-scope yt-live-chat-paid-message-renderer"></div>
  </div>
</div>
<div id="buy-flow-button" class="style-scope yt-live-chat-paid-message-renderer" hidden=""></div>
<div id="inline-action-button-container" class="style-scope yt-live-chat-paid-message-renderer" aria-hidden="true">
  <div id="inline-action-buttons" class="style-scope yt-live-chat-paid-message-renderer"></div>
</div>
</yt-live-chat-paid-message-renderer>`;

const colorTemplate = {
  'blue':'--yt-live-chat-paid-message-primary-color:rgba(30,136,229,1); --yt-live-chat-paid-message-secondary-color:rgba(21,101,192,1); --yt-live-chat-paid-message-header-color:rgba(255,255,255,1); --yt-live-chat-paid-message-author-name-color:rgba(255,255,255,0.701961); --yt-live-chat-paid-message-timestamp-color:rgba(255,255,255,0.501961); --yt-live-chat-paid-message-color:rgba(255,255,255,1);',
  'lightBlue':'--yt-live-chat-paid-message-primary-color:rgba(0,229,255,1); --yt-live-chat-paid-message-secondary-color:rgba(0,184,212,1); --yt-live-chat-paid-message-header-color:rgba(0,0,0,1); --yt-live-chat-paid-message-author-name-color:rgba(0,0,0,0.701961); --yt-live-chat-paid-message-timestamp-color:rgba(0,0,0,0.501961); --yt-live-chat-paid-message-color:rgba(0,0,0,1);',
  'yellowGreen':'--yt-live-chat-paid-message-primary-color:rgba(29,233,182,1); --yt-live-chat-paid-message-secondary-color:rgba(0,191,165,1); --yt-live-chat-paid-message-header-color:rgba(0,0,0,1); --yt-live-chat-paid-message-author-name-color:rgba(0,0,0,0.541176); --yt-live-chat-paid-message-timestamp-color:rgba(0,0,0,0.501961); --yt-live-chat-paid-message-color:rgba(0,0,0,1);',
  'yellow':'--yt-live-chat-paid-message-primary-color:rgba(255,202,40,1); --yt-live-chat-paid-message-secondary-color:rgba(255,179,0,1); --yt-live-chat-paid-message-header-color:rgba(0,0,0,0.87451); --yt-live-chat-paid-message-author-name-color:rgba(0,0,0,0.541176); --yt-live-chat-paid-message-timestamp-color:rgba(0,0,0,0.501961); --yt-live-chat-paid-message-color:rgba(0,0,0,0.87451);',
  'orange':'--yt-live-chat-paid-message-primary-color:rgba(245,124,0,1); --yt-live-chat-paid-message-secondary-color:rgba(230,81,0,1); --yt-live-chat-paid-message-header-color:rgba(255,255,255,0.87451); --yt-live-chat-paid-message-author-name-color:rgba(255,255,255,0.701961); --yt-live-chat-paid-message-timestamp-color:rgba(255,255,255,0.501961); --yt-live-chat-paid-message-color:rgba(255,255,255,0.87451);',
  'magenta':'--yt-live-chat-paid-message-primary-color:rgba(233,30,99,1); --yt-live-chat-paid-message-secondary-color:rgba(194,24,91,1); --yt-live-chat-paid-message-header-color:rgba(255,255,255,1); --yt-live-chat-paid-message-author-name-color:rgba(255,255,255,0.701961); --yt-live-chat-paid-message-timestamp-color:rgba(255,255,255,0.501961); --yt-live-chat-paid-message-color:rgba(255,255,255,1);',
  'red':'--yt-live-chat-paid-message-primary-color:rgba(230,33,23,1); --yt-live-chat-paid-message-secondary-color:rgba(208,0,0,1); --yt-live-chat-paid-message-header-color:rgba(255,255,255,1); --yt-live-chat-paid-message-author-name-color:rgba(255,255,255,0.701961); --yt-live-chat-paid-message-timestamp-color:rgba(255,255,255,0.501961); --yt-live-chat-paid-message-color:rgba(255,255,255,1);'
}

/**
 * Convert user-submitted chats into super chats.
 * @param {string} yourName User name
 * @param {object} chatArea Where the video chat appears
 * @param {object} postedChat Chat posted by users
 */
const convertToSuperchat = function(yourName, chatArea, postedChat) {
  if(postedChat.length){
    chrome.storage.sync.get(['enabled','amount','randomize'], items => {
      const enabled = items.enabled || true;
      const amount = items.amount || 500;
      const randomize = items.randomize || false;
      if (enabled) {
        const chatAmount = getAmount(amount, randomize);
        let superchat = suprchatTemplate.replace('@Id@', $(postedChat).attr('id'))
                                .replace('@Color@', getSuperChatColor(chatAmount))
                                .replace('@Img@', $(postedChat).find('#author-photo img').attr('src'))
                                .replace('@Name@', yourName)
                                .replace('@Time@', $(postedChat).find('#timestamp').text())
                                .replace('@Comment@', $(postedChat).find('#message').outerHTML);
        postedChat.before($.parseHTML(superchat));
        postedChat.remove();
        setTimeout(function() {
          const convertedChat = $(chatArea).find("yt-live-chat-paid-message-renderer:contains('" + yourName +"')");
          $(convertedChat).find('#purchase-amount yt-formatted-string').text('￥' + chatAmount.toLocaleString());
          $(convertedChat).attr('style', getSuperChatColor(chatAmount));
        }, 2000);
      }
    });
  }
}

/**
 * Get the amount of the superchat.
 * @param {number} amount Amount set by the user
 * @param {boolean} randomize Whether to randomize the amount
 * @returns Acquired amount
 */
const getAmount = function(amount, randomize) {
  if (randomize) {
    return Math.ceil(Math.random() * 100) * 100;
  } else {
    return amount;
  }
}

/**
 * Get the color of the super chat.
 * @param {number} amount Set amount
 * @returns Color information based on the amount
 */
const getSuperChatColor = function(amount) {
  if (amount < 200) {
    return colorTemplate.blue;
  } else if (amount < 500) {
    return colorTemplate.lightBlue;
  } else if (amount < 1000) {
    return colorTemplate.yellowGreen;
  } else if (amount < 2000) {
    return colorTemplate.yellow;
  } else if (amount < 5000) {
    return colorTemplate.orange;
  } else if (amount < 10000) {
    return colorTemplate.magenta;
  } else {
    return colorTemplate.red;
  }
};

/**
 * Initialize the monitoring of the chat area.
 */
const init = function() {
  const chatFrame = $('#chatframe')[0];
  if (!chatFrame) {
    setTimeout(init, 1000);
    return;
  }
  const chatArea = $('#chat-messages', chatFrame.contentWindow.document)[0];
    if (!chatArea) {
      setTimeout(init, 1000);
      return;
    }
    const observer = new MutationObserver(() => {
      const yourName = $(chatArea).find('#input-container span#author-name').text();
      const postedChat = $(chatArea).find("yt-live-chat-text-message-renderer:contains('" + yourName +"')");
      convertToSuperchat(yourName, chatArea, postedChat);
    });
    observer.observe(chatArea, {
      childList: true,
      subtree: true,
    });
};
init();