  async function init() {
    await buildComboBox();
    buildFormListener();
  }

  async function buildComboBox() {
    const combo = document.getElementById("container-identities");
    const identities = await getIdentities().catch(e => function(e) {
      console.error(e);
    });
    let opt = null;
    identities.forEach(function(id) {
      opt = document.createElement('option');
      opt.value = id.cookieStoreId;
      opt.innerHTML = id.name;
      opt.id = "container-option";
      opt.setAttribute("name", "option");
      combo.append(opt);
    });
  }

  async function getIdentities() {
    return browser.contextualIdentities.query({});
  }

  function buildFormListener() {
    const _form = document.getElementById("container-form");
    _form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(this._form);
      console.log(data);
    });
  }

  init();
