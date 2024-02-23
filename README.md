# Android Contact Image Photoshop Script
A simple Photoshop script for resizing and cropping larger images to 720x720 pixels for Android contact images.

Images with height and width of 720 pixels or less are unchanged. Square images are resized to 720x720 pixels if larger. Other sizes have the smaller dimension scaled to 720 pixels and then a 720x720 pixel horizontally-centered, vertically-top crop is performed.

Place the script in your version of Photoshop's ~\Presets\Scripts

I personally create an action in Photoshop that runs the script, saves the file, then closes the file. I batch automate this action for all files within a given folder.
