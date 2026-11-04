import os
import re

files_to_convert = [
    ("Buttons", "BurgiSimon_wonderful-seahorse-35.html", "UivAquaLiquidBtn", "Hold Me Liquid Gradient Button"),
    ("Buttons", "0x3ther_heavy-dragon-56.html", "UivCyanGlowBtn", "Get Started Cyan Glow Button"),
    ("Buttons", "Dashrath-Sharma_chatty-tiger-70.html", "UivAbyssalGlassBtn", "Abyssal Glass Reflection Button"),
    ("Buttons", "Bodyhc_sharp-seahorse-46.html", "UivSeahorseNavPill", "Marine Nav Pill Button"),
    ("Buttons", "John-CFO_green-rabbit-93.html", "UivBiolumBeamBtn", "Bioluminescent Gradient Beam Button"),
    ("Buttons", "EmmaxPlay_rude-yak-98.html", "UivExpeditionCtaBtn", "Expedition Pulse CTA Button"),
    ("Toggle-switches", "csemszepp_soft-pug-40.html", "UivSonarAudioToggle", "Sonar Audio Ambience Toggle"),
    ("Toggle-switches", "vikramsinghnegi_sweet-cow-44.html", "UivBubblePhysicsSwitch", "Liquid Bubble Toggle Switch"),
    ("Toggle-switches", "Nawsome_short-dolphin-98.html", "UivDiveTorchSwitch", "Dive Torch Switch"),
    ("Toggle-switches", "Praashoo7_nasty-seahorse-26.html", "UivDepthUnitsSwitch", "Depth Unit (M/FT) Switch"),
    ("Cards", "AnthonyPreite_tiny-shrimp-10.html", "UivBiolumMarineCard", "Bioluminescent Glass Marine Card"),
    ("Cards", "Aryan-81_rare-rattlesnake-22.html", "UivNeonReefCard", "Neon Coral Reef Feature Card"),
    ("Cards", "EzzoHamdan_strong-earwig-64.html", "UivAbyssalDepthCard", "Abyssal Depth Mission Card"),
    ("Cards", "0xnihilism_cold-tiger-22.html", "UivExpeditionRouteCard", "Expedition Waypoint Route Card"),
    ("Inputs", "ARUSH221617_fresh-bear-10.html", "UivAquaSearchInput", "Search Immersion Zone Input"),
    ("Inputs", "AmruthLP12_splendid-zebra-21.html", "UivDiverNameInput", "Diver Full Name Input"),
    ("Inputs", "Bodyhc_afraid-eel-42.html", "UivDiverEmailInput", "Diver Email Input"),
    ("Inputs", "Bodyhc_plastic-dodo-97.html", "UivDiverCertInput", "Certification Level Input"),
    ("loaders", "NlghtM4re_new-seahorse-90.html", "UivOxygenPulseLoader", "Oxygen Pulse Loader"),
    ("loaders", "Hashir-Ahmed123_spotty-mouse-64.html", "UivBubbleAscentLoader", "Bubble Ascent Loader"),
    ("Tooltips", "johnliter_clever-lizard-46.html", "UivCoralTooltip", "Coral Biosphere Tooltip"),
    ("Checkboxes", "Praashoo7_white-seahorse-98.html", "UivNitroxGearCheckbox", "Nitrox Gear Protocol Checkbox"),
    ("Checkboxes", "TechByElijah_stale-treefrog-11.html", "UivNightDiveCheckbox", "Night Dive Insurance Checkbox")
]

base_dir = "/root/Evolução Inteligente/arsenal/uiverse-galaxy"
out_dir = "/root/Evolução Inteligente/aqua-sphere/src/components"
os.makedirs(out_dir, exist_ok=True)
out_path = os.path.join(out_dir, "uiverse-collection.tsx")

output = [
    'import React from "react";\n',
    '// 23 Authentic Uiverse Components Integrated for AQUA SPHERE Diving Club\n'
]

for idx, (cat, fname, comp_name, desc) in enumerate(files_to_convert):
    fpath = os.path.join(base_dir, cat, fname)
    if not os.path.exists(fpath):
        print(f"Warning: {fpath} not found!")
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
    css = style_match.group(1) if style_match else ""
    html = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL).strip()

    prefix = f"aq_uiv_{idx}_"
    # Scoped class names
    classes = sorted(list(set(re.findall(r'\.([a-zA-Z0-9_\-]+)', css))), key=lambda x: -len(x))
    for c in classes:
        css = re.sub(r'\.' + re.escape(c) + r'(?=[^a-zA-Z0-9_\-]|$)', '.' + prefix + c, css)
        html = re.sub(r'class="([^"]*)\b' + re.escape(c) + r'\b([^"]*)"', r'class="\1' + prefix + c + r'\2"', html)
        html = re.sub(r"class='([^']*)\b" + re.escape(c) + r"\b([^']*)'", r"class='\1" + prefix + c + r"\2'", html)

    # Scoped IDs
    ids = sorted(list(set(re.findall(r'#([a-zA-Z0-9_\-]+)', css))), key=lambda x: -len(x))
    for id_val in ids:
        css = re.sub(r'#' + re.escape(id_val) + r'(?=[^a-zA-Z0-9_\-]|$)', '#' + prefix + id_val, css)
        html = re.sub(r'id="([^"]*)\b' + re.escape(id_val) + r'\b([^"]*)"', r'id="\1' + prefix + id_val + r'\2"', html)
        html = re.sub(r'for="([^"]*)\b' + re.escape(id_val) + r'\b([^"]*)"', r'for="\1' + prefix + id_val + r'\2"', html)

    html = html.replace('class=', 'className=')
    html = html.replace('for=', 'htmlFor=')
    html = re.sub(r'<input([^>]*)(?<!/)>', r'<input\1 />', html)
    html = re.sub(r'<img([^>]*)(?<!/)>', r'<img\1 />', html)
    html = re.sub(r'<br(?:\s*)>', r'<br />', html)
    html = re.sub(r'<hr(?:\s*)>', r'<hr />', html)
    html = html.replace('stroke-width=', 'strokeWidth=')
    html = html.replace('stroke-linecap=', 'strokeLinecap=')
    html = html.replace('stroke-linejoin=', 'strokeLinejoin=')
    html = html.replace('fill-rule=', 'fillRule=')
    html = html.replace('clip-rule=', 'clipRule=')
    html = html.replace('tabindex=', 'tabIndex=')
    html = html.replace('viewbox=', 'viewBox=')
    html = html.replace('stop-color=', 'stopColor=')

    # Component template
    comp_code = f"""
export interface {comp_name}Props {{
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  label?: string;
  placeholder?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  [key: string]: any;
}}

export const {comp_name}: React.FC<{comp_name}Props> = ({{ className = "", onClick, children, label, placeholder, checked, onChange, ...rest }}) => {{
  return (
    <div className={{`inline-block ${{className}}`}} onClick={{onClick}} {{...rest}}>
      <style>{{`
{css}
      `}}</style>
      <div dangerouslySetInnerHTML={{{{ __html: `{html.replace('`', '\\`')}` }}}} />
    </div>
  );
}};
"""
    output.append(comp_code)

with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(output))

print(f"✅ Generated {len(files_to_convert)} components in {out_path}")