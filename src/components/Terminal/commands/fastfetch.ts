function upTime() {
  console.log(window);
}

// TODO: change banner
const banner = `
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
//TODO: get theme from tailwind
//TODO: get locale lang
//TODO: align on left name colored values in another

export function fastfetch() {
  const infos = [
    { name: "OS", value: "tOS x86_64" },
    { name: "Host", value: "THANG" },
    { name: "Kernel", value: "101.9N.VH2.37" },
    { name: "Uptime", value: upTime() },
    {
      name: "Display",
      value: `${screen.availWidth},${screen.availHeight} 60Hz`,
    },
    { name: "Framework", value: "Astro" },
    { name: "Theme", value: "Dark" },
    { name: "Icons", value: "Material Design" },
    { name: "Font", value: "Mononoki" },
    { name: "Terminal", value: "TsTerm" },
    { name: "Locale", value: "en-US.UTF-8" },
  ];
  const splitedBanner = banner.split("\n").filter((element) => element !== "");
  let response = "";

  for (let i = 0; i < splitedBanner.length; i++) {
    response += `${splitedBanner[i]} ${infos[i].name}: ${infos[i].value} \n`;
  }
  return response;
}
