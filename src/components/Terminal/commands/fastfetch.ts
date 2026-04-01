//const connectionTime = performance.now();

function upTime() {
  //const currentTime = performance.now();
  //console.log(connectionTime);
}

function refreshRate(){
  //console.log(screen)
}

// TODO: change banner
const banner = 
`
  ****        * 
 *  **********  
*     *******   
*     *  *      
 **  *  **      
    *  ***      
   **   **      
    **  **      
     ** *     * 
      ***   **  
        *****   
`;
//TODO: refresh rate (requestAnimationFrame)
//TODO: get theme from tailwind
//TODO: get locale lang
//TODO: align on left name colored values in another
const infos = [
  { name: "OS:", value: "tOS x86_64" },
  { name: "Host", value: "THANG" },
  { name: "Kernel", value: "101.9N.VH2.37" },
  { name: "Uptime", value: upTime() },
  {
    name: "Display",
    value: `${screen.avail},${window.innerHeight} ${refreshRate()}`,
  },
  { name: "Framework", value: "AstroJs" },
  { name: "Theme", value: "Dark" },
  { name: "Icons", value: "Material Design" },
  { name: "Font", value: "Mononoki" },
  { name: "Terminal", value: "TsMockedTerm" },
  { name: "Locale", value: "en-US.UTF-8" },
];

export function fastfetch() {
  const splitedBanner = banner.split("\n").filter((element)=> element !== "");
  let response = "";
  
  for(let i = 0; i < splitedBanner.length; i++){
    response += `${splitedBanner[i]} ${infos[i].name} : ${infos[i].value} \n`;
  }
  return response;
}
