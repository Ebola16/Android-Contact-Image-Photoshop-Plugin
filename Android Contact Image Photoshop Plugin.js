var doc = app.activeDocument;
doc.changeMode(ChangeMode.RGB);

var height = doc.height.as("px");
var width = doc.width.as("px");
var px720 = UnitValue(720, "px");

if (height > px720 || width > px720) {
    if (height > width) {
        doc.resizeImage(px720, null, null, ResampleMethod.BICUBIC);
    } else {
        doc.resizeImage(null, px720, null, ResampleMethod.BICUBIC);
    }

    height = doc.height.as("px");
    width = doc.width.as("px");

    if (height > width) {
        // bounds = array[left, top, right, bottom]         
        bounds = [0, 0, px720, px720];
        doc.crop(bounds);
    }

    if (width > height) {
        if (width % 2 != 0) {
            width = width + UnitValue(1, "px");
        }
        // bounds = array[left, top, right, bottom] 
        bounds = [Math.abs(width - px720) / 2, 0, px720 + Math.abs(width - px720) / 2, px720];
        doc.crop(bounds);
    }
}
