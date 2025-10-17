//HACK4IMPACT MILESTONE SCRIPT ELEMENTS ARE LOCATED BELOW:
[
  ["scroll-friend", "friend-target"],
  ["scroll-musicphile", "music-target"],
  ["scroll-human", "human-target"],
  ["scroll-website", "website-target"],
  ["scroll-top", "top-target"],
  ["scroll-objectdetection", "objectdetection-target"],
  ["scroll-designs", "designs-target"],
].forEach(([btn, target]) => {
  const el = document.getElementById(btn);
  const tgt = document.getElementById(target);
  if (el && tgt) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      tgt.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});

//HACK4IMPACT MILESTONE SCRIPT:

