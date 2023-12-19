
var VIDEO_ASPECT_RATIO = 18.0 / 9.0;

var sofaTextStrings = [
    "Reference",
    "<em>\"Leather sofa, desiccated and bleached by harsh winds, material brittle and cracked, buried in red Martian dust, a stark anomaly in the barren landscape.\"</em>",
    "<em>\"The leather sofa, partially submerged in the swamp, looks discolored and soggy, its once-polished surface marred by mud, moss, and the murky water of the swamp environment.\"</em>",
    "<em>\"A leather sofa, wet, darkened, glistening, sits on the rain-soaked street, water droplets beading, vulnerable to weathering.\"</em>",
    "<em>\"Leather sofa, splattered with colorful paint, surface nicked by art tools, an impromptu canvas amidst the creative disarray of the painting studio.\"</em>",
    "<em>\"Leather sofa, cracked and discolored, caked with drying mud, contrasting with the stark, grey volcanic earth.\"</em>",
    "<em>\"Leather sofa, leather swelling, color fading, sea life colonizing, structure disintegrating, becoming part of the underwater coral landscape.\"</em>",
    "<em>\"Neon lights, dark shadows, gritty textures, saturated colors, urban decay, futuristic signs. Leather sofa, weathered, graffitied, grimy, absorbed into the cyberpunk backdrop.\"</em>",
];

$("#sofa-video").on('loadedmetadata', function() {
    this.width = this.videoWidth;
    this.height = this.videoHeight;
    console.log(this.width, this.height);
  });

$(function() {
    current_sofa_idx = 0;
    current_bear_idx = 0;

    sofaVideo = document.getElementById('sofa-video');

    sofaText = document.getElementById('sofa-text');

    sofaThumbnails = [
        document.getElementById('reference'),
        document.getElementById('mars'),
        document.getElementById('swamp'),
        document.getElementById('rainy_street'),
        document.getElementById('painting_studio'),
        document.getElementById('mud_volcano'),
        document.getElementById('seabed'),
        document.getElementById('cyberpunk'),
      ];
      for (var i = 0; i < sofaThumbnails.length; i++) {
        sofaThumbnails[i].addEventListener('click', change_sofa_index.bind(this, i));
      }
      change_sofa_index(current_sofa_idx);
  });
  
function change_sofa_index (idx) {
    sofaThumbnails[idx].classList.add("active-btn");
    if (current_sofa_idx != idx) {
        sofaThumbnails[current_sofa_idx].classList.remove("active-btn");
    }
    current_sofa_idx = idx;
    sofaText.innerHTML = sofaTextStrings[idx];
    sofaVideo.src = "video/sofa_" + sofaThumbnails[idx].id + "_combined.mp4";
    sofaVideo.load();
}