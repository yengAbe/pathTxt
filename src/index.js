import { fabric } from "fabric";

var canvas = new fabric.Canvas("cnvs");

var path = new fabric.Path("M 178,-6 a 178 178 -2 0 1 -356,0", {
  strokeWidth: 1,
  stroke: "#a9a9a9",
  left: 0,
  top: 0,
  fill: "transparent",
  id: "path"
});
var itext = new fabric.Text("Hello", {
  path: path,
  left: 20,
  top: 100,
  fill: "#000000",
  fontFamily: "Times New Roman",
  fontSize: 30,
  fontWeight: "normal",
  strokeLineJoin: "round",
  textAlign: "center",
  pathStartOffset: 0,
  pathSide: "right",
  pathAlign: "center"
});
canvas.add(itext);

document
  .getElementById("startOffsetInput")
  .addEventListener("input", function () {
    if (canvas.getActiveObject() != null) {
      canvas.getActiveObject().set("pathStartOffset", Number(this.value));
      canvas.renderAll();
    }
  });

document
  .getElementById("charSpacingInput")
  .addEventListener("input", function () {
    if (canvas.getActiveObject() != null) {
      canvas.getActiveObject().set("charSpacing", Number(this.value));
      canvas.renderAll();
    }
  });
