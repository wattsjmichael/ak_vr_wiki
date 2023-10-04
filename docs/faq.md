# FAQ

This document provides a list of frequently asked questions about the virtual tour. How to address certain issues during your build and configuration..

## 1. **Build not rendering properly**:
1. Check your JSON object for any errors by running it through a validator like https://jsonlint.com/
2. Have you set the correct 't' value in sessionStorage to render the correct build? Default is all. You can also change this by adding '&t=all' to the URL.
- `debugkeys`: A boolean value to enable or disable debug keys, set to false.
- `debugmode`: A boolean value to enable or disable debug mode, set to true.

## 2. **Video Menu**:
The Video Menu section within the XML snippet contains a list of video links categorized under various headings like "Tower Videos", "Core Response Procedures", "Emergency Scenarios", and "Catalog Videos". Each video link is associated with a `data-url` attribute which likely refers to the video source or identifier.

## 3. **Points Of Interest (POIs)**:
The Points of Interest (POIs) section within the XML snippet defines several data items each associated with a type and a text description. The types include "placard" and "video", and each data item has a name and content that describes a specific point of interest or provides additional information regarding it.

## 4. **Videos**:
The Videos section within the XML snippet defines multiple data items each associated with a name and a stream attribute. The content of each data item appears to be a list of source links for streaming videos. Each video is categorized under either "Tower" or "Catalog", and is further associated with a specific emergency scenario or procedure.