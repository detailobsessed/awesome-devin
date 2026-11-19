document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".hextra-sidebar-container");
  const mobile = window.matchMedia("(max-width: 767px)");

  function syncSidebar() {
    if (!sidebar) return;
    sidebar.inert = mobile.matches && sidebar.getAttribute("aria-hidden") === "true";
    sidebar.querySelectorAll(".hextra-sidebar-children").forEach((children) => {
      children.inert = !children.parentElement.classList.contains("open");
    });
    sidebar.querySelectorAll(".hextra-sidebar-collapsible-button").forEach((button) => {
      const title = button.parentElement.querySelector("a, span")?.textContent.trim();
      button.setAttribute("aria-label", `Toggle ${title || "navigation section"}`);
    });
  }

  if (sidebar) {
    new MutationObserver(syncSidebar).observe(sidebar, {
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "aria-hidden"],
    });
    mobile.addEventListener("change", syncSidebar);
    syncSidebar();
  }

  const content = document.querySelector("#content");
  if (content) content.setAttribute("tabindex", "-1");

  document.querySelectorAll(".hextra-search-wrapper").forEach((wrapper, index) => {
    const input = wrapper.querySelector("input");
    const results = wrapper.querySelector(".hextra-search-results");
    if (!input || !results) return;
    results.id = `search-results-${index}`;
    results.setAttribute("role", "listbox");
    input.setAttribute("role", "combobox");
    input.setAttribute("aria-autocomplete", "list");
    input.setAttribute("aria-controls", results.id);

    function syncSearch() {
      const open = !results.classList.contains("hx:hidden");
      input.setAttribute("aria-expanded", String(open));
      let page = "";
      let optionIndex = 0;
      results.querySelectorAll(":scope > *").forEach((item) => {
        if (item.classList.contains("hextra-search-prefix")) {
          page = item.textContent.trim();
          item.setAttribute("role", "presentation");
        }
        const link = item.querySelector("a");
        if (!link) return;
        item.setAttribute("role", "presentation");
        link.id = `${results.id}-option-${optionIndex++}`;
        link.setAttribute("role", "option");
        const title = link.querySelector(".hextra-search-title")?.textContent.trim();
        link.setAttribute("aria-label", [page, title].filter(Boolean).join(" — "));
        link.setAttribute("aria-selected", String(link.classList.contains("hextra-search-active")));
      });
      const active = results.querySelector(".hextra-search-active");
      if (open && active) input.setAttribute("aria-activedescendant", active.id);
      else input.removeAttribute("aria-activedescendant");
    }

    new MutationObserver(syncSearch).observe(results, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });
    wrapper.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopImmediatePropagation();
      results.classList.add("hx:hidden");
      input.value = "";
      input.dispatchEvent(new Event("input"));
      input.focus();
    }, true);
    syncSearch();
  });
});
