function updateDynamicKeywords() {
  var mapping = {
    edesk: {
      competitor_snippet: "eDesk",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b183e948ab0629b13fe37_9Q06b0xa_400x400-removebg-preview.png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20eDesk%20-%20Landing%20Page%20call%20to%20action",
    },
    freshdesk: {
      competitor_snippet: "Freshdesk",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b18643fa954bf80167a48_fresh.png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20Freshdesk%20-%20Landing%20Page%20call%20to%20action",
    },
    frontapp: {
      competitor_snippet: "Front",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/6019830962c138a0da979066_FrontApp-Logo-(White).png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20Front%20-%20Landing%20Page%20call%20to%20action",
    },
    gladly: {
      competitor_snippet: "Gladly",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b18482943153bc2ec662e_Gladly-3.png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20Gladly%20-%20Landing%20Page%20call%20to%20action",
    },
    helpcrunch: {
      competitor_snippet: "Helpcrunch",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b1825b74ee1a47e06cf0d_HelpCrunch-Logo-(White).png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20HelpCrunch%20-%20Landing%20Page%20call%20to%20action",
    },
    helpscout: {
      competitor_snippet: "Helpscout",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b186907be7939c57952d6_Helpscout-logo.png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20HelpScout%20-%20Landing%20Page%20call%20to%20action",
    },
    intercom: {
      competitor_snippet: "Intercom",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/6019832036843e3b92c48ca0_Intercom.png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20Intercom%20-%20Landing%20Page%20call%20to%20action",
    },
    kayako: {
      competitor_snippet: "Kayako",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b182dbc1d6170b3cc3878_Kayako.png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm1-demo?month=2020-11&utm_source=google&utm_medium=cta-on-page",
    },
    kustomer: {
      competitor_snippet: "Kustomer",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b18592943157145ec6db4_kustomer.png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20Kustomer%20-%20Landing%20Page%20call%20to%20action",
    },
    "live-agent": {
      competitor_snippet: "Live Agent",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b1854587e5f02fba4118c_Live-Agent-logo.png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20Live_Agent%20-%20Landing%20Page%20call%20to%20action",
    },
    reamaze: {
      competitor_snippet: "Re:amaze",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b185ea6fe7fff575f05af_reamaze.png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20Reamaze%20-%20Landing%20Page%20call%20to%20action",
    },
    richpanel: {
      competitor_snippet: "Richpanel",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b1843148777b6d5907fdf_Richpanel-2.png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20Richpanel%20-%20Landing%20Page%20call%20to%20action",
    },
    trengo: {
      competitor_snippet: "Trengo",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/607b1834f49985ff5b58a4ae_Trengo-Logo-(White).png",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20Trengo%20-%20Landing%20Page%20call%20to%20action",
    },
    zendesk: {
      competitor_snippet: "Zendesk",
      competitor_logo:
        "https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/5fa52aec3d644fad919e5d2f_zendesk.svg",
      calendly_link:
        "https://calendly.com/gorgias-sales/gm2-demo?utm_medium=cpc&utm_campaign=Competitors%20-%20Zendesk%20Shopify%20-%20Landing%20Page%20call%20to%20action",
    },
    tidio: { competitor_snippet: "Tidio", competitor_logo: "" },
    delightchat: { competitor_snippet: "Delightchat", competitor_logo: "" },
    chatfuel: { competitor_snippet: "Chatfuel", competitor_logo: "" },
    manychat: { competitor_snippet: "Manychat", competitor_logo: "" },
    freshchat: { competitor_snippet: "FreshChat", competitor_logo: "" },
    olark: { competitor_snippet: "OlarK", competitor_logo: "" },
    tawk: { competitor_snippet: "Tawk.io", competitor_logo: "" },
    zopim: { competitor_snippet: "Zopi", competitor_logo: "" },
    replyco: { competitor_snippet: "Replyco", competitor_logo: "" },
  };

  var url = new URL(window.location.href);
  var keyword = url.searchParams.get("ajs_prop_keyword");
  var dynamic_keyword = "";

  if (keyword.includes("zendesk")) {
    dynamic_keyword = "zendesk";
  } else if (keyword.includes("freshdesk")) {
    dynamic_keyword = "freshdesk";
  } else if (keyword.includes("front")) {
    dynamic_keyword = "frontapp";
  } else if (keyword.includes("gladly")) {
    dynamic_keyword = "gladly";
  } else if (keyword.includes("helpcrunch")) {
    dynamic_keyword = "helpcrunch";
  } else if (keyword.includes("helpscout")) {
    dynamic_keyword = "helpscout";
  } else if (keyword.includes("intercom")) {
    dynamic_keyword = "intercom";
  } else if (keyword.includes("kayako")) {
    dynamic_keyword = "kayako";
  } else if (keyword.includes("kustomer")) {
    dynamic_keyword = "kustomer";
  } else if (keyword.includes("liveagent")) {
    dynamic_keyword = "live-agent";
  } else if (keyword.includes("reamaze")) {
    dynamic_keyword = "reamaze";
  } else if (keyword.includes("richpanel")) {
    dynamic_keyword = "richpanel";
  } else if (keyword.includes("trengo")) {
    dynamic_keyword = "trengo";
  } else if (keyword.includes("edesk")) {
    dynamic_keyword = "edesk";
  } else if (keyword.includes("tidio")) {
    dynamic_keyword = "tidio";
  } else if (keyword.includes("delightchat")) {
    dynamic_keyword = "delightchat";
  } else if (keyword.includes("chatfuel")) {
    dynamic_keyword = "chatfuel";
  } else if (keyword.includes("manychat")) {
    dynamic_keyword = "manychat";
  } else if (keyword.includes("freshchat")) {
    dynamic_keyword = "freshchat";
  } else if (keyword.includes("olark")) {
    dynamic_keyword = "olark";
  } else if (keyword.includes("tawk")) {
    dynamic_keyword = "tawk";
  } else if (keyword.includes("zopim")) {
    dynamic_keyword = "zopim";
  } else if (keyword.includes("replyco")) {
    dynamic_keyword = "replyco";
  } else {
    dynamic_keyword = "generic";
  }

  if (mapping[dynamic_keyword]) {
    document
      .querySelectorAll("span.js-competitor")
      .forEach(function (ele, idx) {
        ele.innerHTML = mapping[dynamic_keyword]["competitor_snippet"];
      });
  }


  if (keyword.includes("desk")) {
    document.querySelectorAll("span.js-category").forEach(function (ele, idx) {
      ele.innerHTML = "Helpdesk";
    });
  } else if (keyword.includes("customer") && keyword.includes("support")) {
    document.querySelectorAll("span.js-category").forEach(function (ele, idx) {
      ele.innerHTML = "Customer Support";
    });
  } else if (keyword.includes("customer") && keyword.includes("service")) {
    document.querySelectorAll("span.js-category").forEach(function (ele, idx) {
      ele.innerHTML = "Customer Service";
    });
  } else if (keyword.includes("live") && keyword.includes("chat")) {
    document.querySelectorAll("span.js-category").forEach(function (ele, idx) {
      ele.innerHTML = "Live Chat";
    });
  } else if (keyword.includes("ticket")) {
    document.querySelectorAll("span.js-category").forEach(function (ele, idx) {
      ele.innerHTML = "Ticketing";
    });
  } else {
    // do nothing
  }

  if (keyword.includes("magento")) {
    document.querySelectorAll("span.js-platform").forEach(function (ele, idx) {
      ele.innerHTML = "Magento";
    });
  } else if (keyword.includes("bigcommerce")) {
    document.querySelectorAll("span.js-platform").forEach(function (ele, idx) {
      ele.innerHTML = "BigCommerce";
    });
  } else {
    // do nothing
  }

  if (
    window.location.pathname == "/dl/customer-support" &&
    (keyword.includes("magento") || keyword.includes("bigcommerce"))
  ) {
    document.querySelector("div.wrapper-reviews-link.left").remove();
    document.querySelector("div.partner-badge-container").remove();
  }

  if (window.location.pathname == "/dl/competitor-support") {
    if (
      mapping[dynamic_keyword] &&
      mapping[dynamic_keyword]["competitor_logo"] !== ""
    ) {
      document.querySelector("img.logo-competitor").src =
        mapping[dynamic_keyword]["competitor_logo"];
    } else {
      document.querySelector("img.logo-competitor").style = "display:none";
      document.querySelector("img.logo-gorgias").style = "display:none";
    }
  }
}
