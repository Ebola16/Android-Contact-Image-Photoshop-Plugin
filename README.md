# Android-Contact-Image-Photoshop-Plugin
A simple Photoshop script for resizing and cropping larger images to 720x720px for Android contact images.

Square images are resized to 720x720px. Other sizes have the smaller dimension scaled to 720px and then a 720x720px horizontally-centered, vertically-top crop is performed. Images with both dimensions 720x720px or smaller are ignored.

Place the script in your version of Photoshop's ~\Presets\Scripts

I personally create an action in Photoshop that runs the script, saves the file, then closes the file. I batch automate this action for all files within a given folder.