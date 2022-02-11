export const fileDownloader = (text: string, name: string, type: string) => {
    var a = document.createElement("a");
    var rootDiv = document.getElementById("root");
    rootDiv?.appendChild(a);

    var file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
    a.remove();
};
