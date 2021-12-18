window.onload = ()  => {
    const enabled = document.getElementById('enabled');
    const currentValue = document.getElementById('currentValue');
    const amount = document.getElementById('amount');
    const randomize = document.getElementById('randomize');
    const submit = document.getElementById('submit');
    const message = document.getElementById('message');

    chrome.storage.sync.get(['enabled','amount','randomize'], items => {
      enabled.checked = items.enabled == null ? true : items.enabled;
      amount.value = items.amount || 500;
      currentValue.value = items.amount || 500;
      randomize.checked = items.randomize == null ? false : items.enabled;
      if(enabled.checked) {
        currentValue.disabled = randomize.checked;
        amount.disabled = randomize.checked;
        randomize.disabled = false;
      } else {
        currentValue.disabled = true;
        amount.disabled = true;
        randomize.disabled = true;
      }
    });

    enabled.onchange = function() {
      if(enabled.checked) {
        currentValue.disabled = randomize.checked;
        amount.disabled = randomize.checked;
        randomize.disabled = false;
      } else {
        currentValue.disabled = true;
        amount.disabled = true;
        randomize.disabled = true;
      }
    }

    currentValue.oninput = function() {
      amount.value = currentValue.value
    }

    amount.oninput = function() {
      currentValue.value = amount.value
    }

    randomize.onchange = function() {
      if(randomize.checked) {
        currentValue.disabled = true;
        amount.disabled = true;
      } else {
        currentValue.disabled = false;
        amount.disabled = false;
      }
    }

    submit.onclick = function() {
      chrome.storage.sync.set({
        enabled: enabled.checked,
        amount: amount.value,
        randomize: randomize.checked
      }, function() {
        message.textContent = 'Saved';
        setTimeout(() => message.textContent = '', 750);
      });
    }
  };