TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "id": "panorama_10995283_1938_2B3A_41B8_3BFAD913E403",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "partial": false,
     "id": "panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "partial": false,
        "id": "panorama_109B0239_1938_2B56_41B0_AB329B348192",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
          "backwardYaw": -144.85,
          "class": "AdjacentPanorama",
          "yaw": -110.4,
          "distance": 1
         },
         {
          "panorama": {
           "partial": false,
           "id": "panorama_10997093_1938_E75A_4174_6DF3A6A75EED",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_109B0239_1938_2B56_41B0_AB329B348192",
             "backwardYaw": 104.09,
             "class": "AdjacentPanorama",
             "yaw": 77.46,
             "distance": 1
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_t.jpg",
             "overlays": [
              {
               "maps": [
                {
                 "hfov": 9.84,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 77.46,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 87,
                    "width": 86,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -17.05
                }
               ],
               "id": "overlay_08C1B044_19C8_273E_41B0_5A0B97FB02A0",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_109B0239_1938_2B56_41B0_AB329B348192, this.camera_66EEC961_69FD_26D2_41D0_1472D3F512D6); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 77.46,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.84,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 175,
                    "width": 173,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -17.05
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 10.94,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 0.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 96,
                    "width": 98,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 19.9
                }
               ],
               "id": "overlay_464A5472_4AD1_5398_41D1_869BD9B7E153",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 0.7,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.94,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 193,
                    "width": 196,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": 19.9
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "class": "ImageResourceLevel",
                "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED.jpeg"
               }
              ]
             }
            }
           ],
           "vfov": 180,
           "hfovMin": 60,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_t.jpg",
           "label": "Ruang Keuangan",
           "class": "Panorama",
           "hfovMax": 120
          },
          "backwardYaw": 77.46,
          "class": "AdjacentPanorama",
          "yaw": 104.09,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_t.jpg",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 10.2,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 104.09,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 87,
                 "width": 86,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -7.71
             }
            ],
            "id": "overlay_090A318B_1938_694A_41B5_DA60F999EF6D",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED, this.camera_6735A8E4_69FD_27D1_41BC_68BAAD5A2FF4); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 104.09,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.2,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 175,
                 "width": 173,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -7.71
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 10.24,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -110.4,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 87,
                 "width": 86,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -5.86
             }
            ],
            "id": "overlay_096E7B75_1938_19DE_41A4_AE96A7D1AC5E",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4, this.camera_672748B4_69FD_27B2_41D0_520C207B5D2E); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -110.4,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.24,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 175,
                 "width": 173,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -5.86
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 9.98,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 24.74,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "width": 86,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": 14.29
             }
            ],
            "id": "overlay_09317E14_1938_3B5E_41B3_C2BED932E89C",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 11)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 24.74,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 173,
                 "width": 173,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_2_0.png"
                }
               ]
              },
              "pitch": 14.29
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 9.63,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 8.68,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 87,
                 "width": 86,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": 20.7
             }
            ],
            "id": "overlay_55AA3AAE_4683_1ECB_41C2_A1789FD38313",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.showPopupPanoramaOverlay(this.popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD, {'pressedIconWidth':20,'paddingBottom':5,'rollOverIconWidth':20,'borderSize':2,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','paddingLeft':5,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','pressedBorderSize':2,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedIconColor':'#888888','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':2,'paddingRight':30}, this.ImageResource_54C5AA0C_4683_39CE_41CF_2A26B5A16BF5, null, null, null, null, false)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 8.68,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.63,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 175,
                 "width": 173,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_4_0.png"
                }
               ]
              },
              "pitch": 20.7
             }
            ]
           },
           {
            "hideDuration": 500,
            "rotationZ": 0,
            "yaw": 8.68,
            "rotationY": 0,
            "showEasing": "cubic_in",
            "hfov": 9.63,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%",
            "popupMaxWidth": "95%",
            "id": "popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD",
            "rotationX": 0,
            "showDuration": 500,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 723,
               "width": 1024,
               "class": "ImageResourceLevel",
               "url": "media/popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD_0_2.png"
              }
             ]
            },
            "class": "PopupPanoramaOverlay",
            "pitch": 20.7
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "class": "ImageResourceLevel",
             "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192.jpeg"
            }
           ]
          }
         }
        ],
        "vfov": 180,
        "hfovMin": 60,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_t.jpg",
        "label": "Lift Lantai 1",
        "class": "Panorama",
        "hfovMax": 120
       },
       "backwardYaw": -110.4,
       "class": "AdjacentPanorama",
       "yaw": -144.85,
       "distance": 1
      },
      {
       "panorama": {
        "partial": false,
        "id": "panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
          "backwardYaw": -22.85,
          "class": "AdjacentPanorama",
          "yaw": -43.62,
          "distance": 1
         },
         {
          "panorama": {
           "partial": false,
           "id": "panorama_0FC98319_1958_2956_4196_CBA8074C59EE",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11",
             "backwardYaw": -164.44,
             "class": "AdjacentPanorama",
             "yaw": -84.53,
             "distance": 1
            },
            {
             "panorama": {
              "partial": false,
              "id": "panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": {
                 "partial": false,
                 "id": "panorama_10995E3F_193B_FB49_41AB_711E828E5B3D",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
                   "backwardYaw": -32.84,
                   "class": "AdjacentPanorama",
                   "yaw": 144.45,
                   "distance": 1
                  }
                 ],
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_t.jpg",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "hfov": 10.24,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 144.45,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 86,
                          "width": 86,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 5.78
                      }
                     ],
                     "id": "overlay_08BD9579_1A19_3D5C_4175_3F6457F585C7",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E, this.camera_674F5840_69FD_26D2_41A0_4FB488261ED8); this.mainPlayList.set('selectedIndex', 17)"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 144.45,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 10.24,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 173,
                          "width": 173,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": 5.78
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 7.65,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 57.64,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 66,
                          "width": 66,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 12.06
                      }
                     ],
                     "id": "overlay_37AD1A23_3B2F_CF04_41C0_86EB0A95005E",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 57.64,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.65,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 132,
                          "width": 132,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": 12.06
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3040,
                      "width": 6080,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "vfov": 180,
                 "hfovMin": 60,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_t.jpg",
                 "label": "Perpustakaan",
                 "class": "Panorama",
                 "hfovMax": 120
                },
                "backwardYaw": 144.45,
                "class": "AdjacentPanorama",
                "yaw": -32.84,
                "distance": 1
               },
               {
                "panorama": {
                 "partial": false,
                 "id": "panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
                   "backwardYaw": -143.32,
                   "class": "AdjacentPanorama",
                   "yaw": 81.83,
                   "distance": 1
                  }
                 ],
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_t.jpg",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "hfov": 10.63,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 81.83,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 89,
                          "width": 94,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -18.51
                      }
                     ],
                     "id": "overlay_0E16A98F_1A0B_35B5_41B3_1739BEE3A270",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E, this.camera_67CF2763_69FD_2AD7_41BE_DE0368652C3B); this.mainPlayList.set('selectedIndex', 17)"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 81.83,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 10.63,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 178,
                          "width": 189,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -18.51
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 9.23,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -94.64,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 86,
                          "width": 87,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -27.3
                      }
                     ],
                     "id": "overlay_0EF01AC2_1A0B_77AF_418B_A210FAEF1D86",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.mainPlayList.set('selectedIndex', 21)"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -94.64,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 9.23,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 173,
                          "width": 175,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -27.3
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3040,
                      "width": 6080,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "vfov": 180,
                 "hfovMin": 60,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_t.jpg",
                 "label": "Langkah Menuju Toilet Dan Musholla di Lantai 2",
                 "class": "Panorama",
                 "hfovMax": 120
                },
                "backwardYaw": 81.83,
                "class": "AdjacentPanorama",
                "yaw": -143.32,
                "distance": 1
               },
               {
                "panorama": "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE",
                "backwardYaw": 154.24,
                "class": "AdjacentPanorama",
                "yaw": 80.25,
                "distance": 1
               },
               {
                "panorama": {
                 "partial": false,
                 "id": "panorama_109ECB1D_1938_F949_419B_6BBDA6838247",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
                   "backwardYaw": 9.09,
                   "class": "AdjacentPanorama",
                   "yaw": -140.12,
                   "distance": 1
                  }
                 ],
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_t.jpg",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "hfov": 10.14,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -140.12,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 86,
                          "width": 86,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 10.04
                      }
                     ],
                     "id": "overlay_088E947D_1A19_7355_41A5_8CB00BC121D4",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E, this.camera_678717DF_69FD_29EE_41CF_AD73F6B17B75); this.mainPlayList.set('selectedIndex', 17)"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -140.12,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 10.14,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 173,
                          "width": 173,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": 10.04
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 7.03,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 7.44,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 4.14
                      }
                     ],
                     "id": "overlay_37ED646A_3B3B_5B04_41C0_A1EC41A65DEA",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "Lab Mobile Technology\u000a\u000a1. 21 unit komputer untuk mahasiswa dalam praktikum dan pengembangan aplikasi mobile.  \u000a2. Proyektor sebagai penunjang pembelajaran dan presentasi.  \u000a3. Ruangan ber-AC untuk kenyamanan mahasiswa.  \u000a4. Akses internet cepat untuk riset dan pengembangan aplikasi.  \u000a5. Software pendukung seperti Android Studio dan framework mobile lainnya.  ",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 7.44,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.03,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 118,
                          "width": 118,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": 4.14
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3040,
                      "width": 6080,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "vfov": 180,
                 "hfovMin": 60,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_t.jpg",
                 "label": "Ruangan Lab.Mobile Technology",
                 "class": "Panorama",
                 "hfovMax": 120
                },
                "backwardYaw": -140.12,
                "class": "AdjacentPanorama",
                "yaw": 9.09,
                "distance": 1
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_t.jpg",
                "overlays": [
                 {
                  "maps": [
                   {
                    "hfov": 9.89,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 80.25,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 86,
                       "width": 87,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -17.76
                   }
                  ],
                  "id": "overlay_0B35ABF9_1A0B_155D_419B_BC384304F959",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE, this.camera_669DDA15_69FD_3A73_41C8_41CEF9DA7E39); this.mainPlayList.set('selectedIndex', 12)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 80.25,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.89,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 173,
                       "width": 175,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -17.76
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 15.98,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 9.09,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 128,
                       "width": 135,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 5.71
                   }
                  ],
                  "id": "overlay_0B04AD3A_1A09_72DC_41AE_2EE26B184EA8",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247, this.camera_666C3A2B_69FD_3A56_41BC_F26BF267F300); this.mainPlayList.set('selectedIndex', 19)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 9.09,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 15.98,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 257,
                       "width": 271,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": 5.71
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 13.57,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -32.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 135,
                       "width": 119,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 16.28
                   }
                  ],
                  "id": "overlay_0BFDC048_1A19_12BB_41AA_C610DEA5A786",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D, this.camera_66B1A9EB_69FD_39D6_41D2_111ECE28080D); this.mainPlayList.set('selectedIndex', 18)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -32.84,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 13.57,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 271,
                       "width": 238,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": 16.28
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 12.29,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -143.32,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 112,
                       "width": 112,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -22.38
                   }
                  ],
                  "id": "overlay_08C1EDC9_1A1F_2DBC_41B8_C5C304D1F87C",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7, this.camera_66801A00_69FD_3A51_41A2_FB36D70DBFB0); this.mainPlayList.set('selectedIndex', 20)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -143.32,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 12.29,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 224,
                       "width": 224,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -22.38
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "width": 6080,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E.jpeg"
                  }
                 ]
                }
               }
              ],
              "vfov": 180,
              "hfovMin": 60,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_t.jpg",
              "label": "Pintu Depan Lab. Mobile Technology dan Pintu Depan Perpustakaan",
              "class": "Panorama",
              "hfovMax": 120
             },
             "backwardYaw": 80.25,
             "class": "AdjacentPanorama",
             "yaw": 154.24,
             "distance": 1
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_t.jpg",
             "overlays": [
              {
               "maps": [
                {
                 "hfov": 10.33,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 0.63,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 86,
                    "width": 87,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -5.68
                }
               ],
               "id": "overlay_0F0AB82E_1958_274A_41AA_77797ED0E1C8",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 13)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 0.63,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.33,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 173,
                    "width": 175,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -5.68
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 10.12,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -84.53,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 87,
                    "width": 86,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -10.73
                }
               ],
               "id": "overlay_145B8742_19F9_1EAC_4192_9F699935E3A6",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11, this.camera_67BCC7B5_69FD_29B2_41D1_2274F6F18803); this.mainPlayList.set('selectedIndex', 10)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -84.53,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.12,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 175,
                    "width": 173,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -10.73
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 10.31,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 154.24,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 86,
                    "width": 87,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.85
                }
               ],
               "id": "overlay_1759DF25_19FB_2EF4_419D_7641133BFD12",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E, this.camera_678AB7CA_69FD_29D6_41D7_E95AB6CE017A); this.mainPlayList.set('selectedIndex', 17)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 154.24,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.31,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 173,
                    "width": 175,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -6.85
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 10.32,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -162.66,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 86,
                    "width": 87,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.5
                }
               ],
               "id": "overlay_172190CA_19F9_33BF_41A2_38C0AF31812A",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 14)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -162.66,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.32,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 173,
                    "width": 175,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -6.5
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "class": "ImageResourceLevel",
                "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE.jpeg"
               }
              ]
             }
            }
           ],
           "vfov": 180,
           "hfovMin": 60,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_t.jpg",
           "label": "Lantai 2",
           "class": "Panorama",
           "hfovMax": 120
          },
          "backwardYaw": -84.53,
          "class": "AdjacentPanorama",
          "yaw": -164.44,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_t.jpg",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 9.86,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -164.44,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "width": 87,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -18.38
             }
            ],
            "id": "overlay_0EF68138_1958_6957_419A_8C27E826B6E6",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE, this.camera_66D599C1_69FD_39D2_41C4_6117AD47413A); this.mainPlayList.set('selectedIndex', 12)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -164.44,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.86,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 173,
                 "width": 175,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -18.38
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 10.28,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -43.62,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "width": 86,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": 3.38
             }
            ],
            "id": "overlay_015BE3B8_1948_E956_41AC_0E7CE8F98EE0",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4, this.camera_66C709AD_69FD_2652_41D3_30766DAFDF72); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -43.62,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.28,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 173,
                 "width": 173,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_1_0.png"
                }
               ]
              },
              "pitch": 3.38
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 9.27,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -89.67,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "width": 86,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": 25.82
             }
            ],
            "id": "overlay_0F2638BF_1A0B_13D5_419C_11804A553DDA",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 22)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -89.67,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.27,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 173,
                 "width": 173,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_2_0.png"
                }
               ]
              },
              "pitch": 25.82
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "class": "ImageResourceLevel",
             "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11.jpeg"
            }
           ]
          }
         }
        ],
        "vfov": 180,
        "hfovMin": 60,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_t.jpg",
        "label": "Tangga Menuju Lantai 3",
        "class": "Panorama",
        "hfovMax": 120
       },
       "backwardYaw": -43.62,
       "class": "AdjacentPanorama",
       "yaw": -22.85,
       "distance": 1
      },
      {
       "panorama": {
        "partial": false,
        "id": "panorama_109A7F44_1938_793E_41B1_1C0C012C65CA",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": {
           "partial": false,
           "id": "panorama_10A6CE96_1938_3B5A_4170_367AAC101022",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": {
              "partial": false,
              "id": "panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022",
                "backwardYaw": -73.5,
                "class": "AdjacentPanorama",
                "yaw": 95.78,
                "distance": 1
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_t.jpg",
                "overlays": [
                 {
                  "maps": [
                   {
                    "hfov": 9.93,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 95.78,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 87,
                       "width": 86,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -15.33
                   }
                  ],
                  "id": "overlay_0DECD267_19D8_2BF9_41A0_DA46C96C449B",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022, this.camera_66A4C9D6_69FD_39FE_41D1_4A60C9415C50); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 95.78,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.93,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 175,
                       "width": 173,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -15.33
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 9.78,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -80.82,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 87,
                       "width": 86,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -18.28
                   }
                  ],
                  "id": "overlay_0FAC8BCA_19D8_18CB_41A7_D03ECF84D0AA",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -80.82,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.78,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 175,
                       "width": 173,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -18.28
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 22.49,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 24.67,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "width": 190,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 16.65
                   }
                  ],
                  "id": "overlay_2F1AF1EE_2276_064B_41A9_3739DB2A1024",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.showPopupPanoramaOverlay(this.popup_452C6691_4AB3_DC98_41B9_E112963125A7, {'pressedIconWidth':20,'paddingBottom':5,'rollOverIconWidth':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','paddingLeft':5,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','pressedBorderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedIconColor':'#888888','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'paddingRight':5}, this.ImageResource_5B484BFF_4B53_5488_41CB_0210827413D8, null, null, null, null, false)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 24.67,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 22.49,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 416,
                       "width": 396,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": 16.65
                   }
                  ]
                 },
                 {
                  "hideDuration": 500,
                  "rotationZ": 0,
                  "yaw": 24.67,
                  "rotationY": 0,
                  "showEasing": "cubic_in",
                  "hfov": 22.49,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%",
                  "popupMaxWidth": "95%",
                  "id": "popup_452C6691_4AB3_DC98_41B9_E112963125A7",
                  "rotationX": 0,
                  "showDuration": 500,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 723,
                     "width": 1024,
                     "class": "ImageResourceLevel",
                     "url": "media/popup_452C6691_4AB3_DC98_41B9_E112963125A7_0_2.png"
                    }
                   ]
                  },
                  "class": "PopupPanoramaOverlay",
                  "pitch": 16.65
                 }
                ],
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "width": 6080,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA.jpeg"
                  }
                 ]
                }
               }
              ],
              "vfov": 180,
              "hfovMin": 60,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_t.jpg",
              "label": "Toilet Lantai 1",
              "class": "Panorama",
              "hfovMax": 120
             },
             "backwardYaw": 95.78,
             "class": "AdjacentPanorama",
             "yaw": -73.5,
             "distance": 1
            },
            {
             "panorama": "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA",
             "backwardYaw": -87.07,
             "class": "AdjacentPanorama",
             "yaw": 173.79,
             "distance": 1
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_t.jpg",
             "overlays": [
              {
               "maps": [
                {
                 "hfov": 13.67,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 173.79,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 79,
                    "width": 116,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -7.64
                }
               ],
               "id": "overlay_0A9AF144_19D8_293E_4167_FC63E21B5D0E",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA, this.camera_67D3D78C_69FD_2A52_4188_E1E3FFA93995); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 173.79,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 13.67,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 158,
                    "width": 232,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -7.64
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 10.21,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -73.5,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 86,
                    "width": 87,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -10.62
                }
               ],
               "id": "overlay_0A3DCA5A_19D8_3BCA_41B8_7BD9D5398BB2",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA, this.camera_67D8E777_69FD_2ABE_41C2_1D3542641525); this.mainPlayList.set('selectedIndex', 6)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -73.5,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.21,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 173,
                    "width": 175,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -10.62
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "class": "ImageResourceLevel",
                "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022.jpeg"
               }
              ]
             }
            }
           ],
           "vfov": 180,
           "hfovMin": 60,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_t.jpg",
           "label": "Langkah Kedua menuju Toilet dan Kantin",
           "class": "Panorama",
           "hfovMax": 120
          },
          "backwardYaw": 173.79,
          "class": "AdjacentPanorama",
          "yaw": -87.07,
          "distance": 1
         },
         {
          "panorama": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
          "backwardYaw": -56.63,
          "class": "AdjacentPanorama",
          "yaw": 86.42,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_t.jpg",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 10.33,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 86.42,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "width": 87,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -5.75
             }
            ],
            "id": "overlay_0BEB1892_19C8_E75A_415A_3DA2590518F1",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4, this.camera_67108938_69FD_26B2_41C8_0853FE05B2CC); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 86.42,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.33,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 173,
                 "width": 175,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -5.75
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 10.21,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -87.07,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 87,
                 "width": 86,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -7.44
             }
            ],
            "id": "overlay_0A8BEB57_19C8_79DA_4195_B5D3E1255F1C",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022, this.camera_6704690D_69FD_2652_41D6_0C8709EE4F05); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -87.07,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.21,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 175,
                 "width": 173,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -7.44
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "class": "ImageResourceLevel",
             "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA.jpeg"
            }
           ]
          }
         }
        ],
        "vfov": 180,
        "hfovMin": 60,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_t.jpg",
        "label": "Langkah menuju Toilet",
        "class": "Panorama",
        "hfovMax": 120
       },
       "backwardYaw": 86.42,
       "class": "AdjacentPanorama",
       "yaw": -56.63,
       "distance": 1
      },
      {
       "panorama": "this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403",
       "backwardYaw": 3.6,
       "class": "AdjacentPanorama",
       "yaw": 160.56,
       "distance": 1
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_t.jpg",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 8.06,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -144.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 77,
              "width": 68,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -8.3
          }
         ],
         "id": "overlay_17AA5829_1958_2776_4199_A0C3C3BC10FC",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_109B0239_1938_2B56_41B0_AB329B348192, this.camera_67EC3710_69FD_2A72_41A8_338E38F04774); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -144.85,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.06,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 154,
              "width": 137,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -8.3
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 9.54,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -56.63,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 81,
              "width": 81,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -7.86
          }
         ],
         "id": "overlay_14E10E32_1948_1B5A_41B9_15A9936D22E6",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA, this.camera_67FCF73A_69FD_2AB6_41D1_8B8B87B174F5); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -56.63,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.54,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 163,
              "width": 162,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -7.86
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 8.93,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -22.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 75,
              "width": 75,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -2.08
          }
         ],
         "id": "overlay_166CAE4D_1948_1BCE_41AF_4045D2198012",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11, this.camera_67E2E725_69FD_2A52_41C3_4F57655DCD41); this.mainPlayList.set('selectedIndex', 10)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -22.85,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.93,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 151,
              "width": 151,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -2.08
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 8.94,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 160.56,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 75,
              "width": 75,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": 0.05
          }
         ],
         "id": "overlay_1658A852_1948_27DA_41B3_063F0E9C6470",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403, this.camera_67F5474E_69FD_2AEF_41C3_E839EBD7CB4A); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 160.56,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.94,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 151,
              "width": 151,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_3_0.png"
             }
            ]
           },
           "pitch": 0.05
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 10.24,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -99.69,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 86,
              "width": 86,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_7_0_0_map.gif"
             }
            ]
           },
           "pitch": 5.78
          }
         ],
         "id": "overlay_89B4375F_87F9_9797_41D8_E3DE0BAB06EB",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_577B9DF6_468F_3A5A_41C5_27F4B9282923, {'pressedIconWidth':20,'paddingBottom':5,'rollOverIconWidth':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','paddingLeft':5,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','pressedBorderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedIconColor':'#888888','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'paddingRight':5}) } else { this.showPopupMedia(this.window_6003C15D_69D3_26F2_4197_AF378C0BFF20, this.video_0E928F34_038D_B7E6_415C_D046B5012510, this.PlayList_64AFDDEB_69ED_79D7_41CD_DEA2F56F746D, '95%', '95%', true, true); this.PlayList_64AFDDEB_69ED_79D7_41CD_DEA2F56F746D.set('selectedIndex', 0); ; this.viewer_uid64E88D64_69ED_7ED1_41C1_72C03072ABD6VideoPlayer.play(); ; this.pauseGlobalAudios() }"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -99.69,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.24,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 173,
              "width": 173,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_7_0.png"
             }
            ]
           },
           "pitch": 5.78
          }
         ]
        },
        {
         "showDuration": 500,
         "rotationZ": 0,
         "yaw": -99.69,
         "rotationY": 0,
         "showEasing": "cubic_in",
         "hfov": 10.24,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%",
         "video": {
          "height": 1080,
          "width": 1920,
          "class": "VideoResource",
          "mp4Url": "media/video_0E928F34_038D_B7E6_415C_D046B5012510.mp4"
         },
         "popupMaxWidth": "95%",
         "id": "popup_577B9DF6_468F_3A5A_41C5_27F4B9282923",
         "loop": false,
         "rotationX": 0,
         "hideDuration": 500,
         "autoplay": true,
         "class": "PopupPanoramaOverlay",
         "pitch": 5.78
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "class": "ImageResourceLevel",
          "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4.jpeg"
         }
        ]
       }
      }
     ],
     "vfov": 180,
     "hfovMin": 60,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_t.jpg",
     "label": "Loby Kampus",
     "class": "Panorama",
     "hfovMax": 120
    },
    "backwardYaw": 160.56,
    "class": "AdjacentPanorama",
    "yaw": 3.6,
    "distance": 1
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 15.94,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 3.6,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 140,
           "width": 135,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 7.16
       }
      ],
      "id": "overlay_1444A13B_1938_294A_4192_117040CE0C17",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4, this.camera_6770C82A_69FD_2656_41AA_F853437BCF1E); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 3.6,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.94,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 280,
           "width": 271,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 7.16
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 9.7,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 49.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": 19.51
       }
      ],
      "id": "overlay_4A184AA4_4685_7EFF_41BF_66832A290C5D",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A, {'pressedIconWidth':20,'paddingBottom':5,'rollOverIconWidth':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','paddingLeft':5,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','pressedBorderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedIconColor':'#888888','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'paddingRight':5}, this.ImageResource_49BCA3A4_469F_0EFE_41D0_04BEB03F9865, null, null, null, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 49.8,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 19.51
       }
      ]
     },
     {
      "hideDuration": 500,
      "rotationZ": 0,
      "yaw": 49.8,
      "rotationY": 0,
      "showEasing": "cubic_in",
      "hfov": 9.7,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "popupMaxWidth": "95%",
      "id": "popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A",
      "rotationX": 0,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 723,
         "width": 1024,
         "class": "ImageResourceLevel",
         "url": "media/popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A_0_2.png"
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "pitch": 19.51
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 111,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_t.jpg",
  "label": "Pintu Depan Kampus",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "preloadEnabled": false,
  "buttonZoomOut": "this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656",
  "buttonMoveUp": "this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718",
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "buttonPlayRight": "this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45",
  "buttonPause": "this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464",
  "buttonMoveDown": "this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED",
  "id": "MainViewerPanoramaPlayer",
  "buttonPlayLeft": "this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8",
  "buttonZoomIn": "this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714",
  "buttonMoveRight": "this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D",
  "viewerArea": "this.MainViewer",
  "buttonMoveLeft": "this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_10995283_1938_2B3A_41B8_3BFAD913E403_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_109D177D_1938_29CE_4198_0172C7F25AB4_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_109B0239_1938_2B56_41B0_AB329B348192",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_109B0239_1938_2B56_41B0_AB329B348192_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_10997093_1938_E75A_4174_6DF3A6A75EED_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_10A6CE96_1938_3B5A_4170_367AAC101022_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_10F287B2_1938_295A_41B2_7F3AF60FF874",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "partial": false,
     "id": "panorama_109EEF72_1938_19DA_41AA_35A62898EA27",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874",
       "backwardYaw": 148.54,
       "class": "AdjacentPanorama",
       "yaw": 117.04,
       "distance": 1
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_t.jpg",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 12.79,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -127.72,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 86,
              "width": 110,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -13.09
          }
         ],
         "id": "overlay_0A6F1AAC_19D8_FB4E_4186_8FE8A382F135",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 9)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -127.72,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 12.79,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 173,
              "width": 221,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -13.09
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 9.98,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 117.04,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 86,
              "width": 87,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -16.04
          }
         ],
         "id": "overlay_0DD09B67_19C8_79FA_41B2_B3827C2F7F79",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874, this.camera_672A488C_69FD_2652_41D7_36FE75A8DEBD); this.mainPlayList.set('selectedIndex', 7)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 117.04,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.98,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 173,
              "width": 175,
              "class": "ImageResourceLevel",
              "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -16.04
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "class": "ImageResourceLevel",
          "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27.jpeg"
         }
        ]
       }
      }
     ],
     "vfov": 180,
     "hfovMin": 60,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_t.jpg",
     "label": "Ruang Depan Badan Eksekutif Mahasiswa",
     "class": "Panorama",
     "hfovMax": 120
    },
    "backwardYaw": 117.04,
    "class": "AdjacentPanorama",
    "yaw": 148.54,
    "distance": 1
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 13.12,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 148.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 151,
           "width": 124,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -27.44
       }
      ],
      "id": "overlay_0DFD20C0_19D8_2736_41B1_173E6112DA55",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27, this.camera_6795E7F8_69FD_29B2_41D5_5ECEC2D36102); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 148.54,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 303,
           "width": 249,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -27.44
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 26.09,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -88.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 147,
           "width": 200,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 9.97
       }
      ],
      "id": "overlay_35A7D755_3B5B_450C_41CD_59FE8A7DDC6F",
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Berikut deskripsi yang lebih lengkap dan ringkas untuk **kantin kampus**:  \u000a\u000a1. Tersedia **meja dan kursi yang nyaman** untuk mahasiswa bersantai dan makan.  \u000a2. **Harga makanan terjangkau** dengan variasi menu yang sesuai untuk mahasiswa.  \u000a3. Dilengkapi dengan **wastafel** untuk mencuci tangan sebelum dan sesudah makan.  \u000a4. Menyediakan berbagai pilihan makanan dan minuman, mulai dari makanan berat hingga camilan.  \u000a5. Area kantin yang **bersih dan terawat** untuk kenyamanan pengunjung.  ",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -88.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 26.09,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 331,
           "width": 447,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 9.97
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_t.jpg",
  "label": "Kantin Kampus",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_109EEF72_1938_19DA_41AA_35A62898EA27_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 222,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.21,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -121.45,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 7.22
       }
      ],
      "id": "overlay_0EAB04FC_0397_EA66_4165_D9E2D84D2F5C",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_456D0585_4AB2_DD78_41D0_1B743B283D0B, {'pressedIconWidth':20,'paddingBottom':5,'rollOverIconWidth':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','paddingLeft':5,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','pressedBorderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedIconColor':'#888888','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'paddingRight':5}) } else { this.showPopupMedia(this.window_601EA159_69D3_26F2_41CA_021B2A71BFCF, this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46, this.PlayList_64AC4DEC_69ED_79D2_41AB_479F7397B2E3, '95%', '95%', true, true); this.PlayList_64AC4DEC_69ED_79D2_41AB_479F7397B2E3.set('selectedIndex', 0); ; this.viewer_uid64ED6D6E_69ED_7EAE_41D9_9A869A34DAA9VideoPlayer.play(); ; this.pauseGlobalAudios() }"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -121.45,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 7.22
       }
      ]
     },
     {
      "showDuration": 500,
      "rotationZ": 0,
      "yaw": -121.45,
      "rotationY": 0,
      "showEasing": "cubic_in",
      "hfov": 10.21,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "video": {
       "height": 1080,
       "width": 1920,
       "class": "VideoResource",
       "mp4Url": "media/video_0DF3228A_0396_AEA2_4170_E28BA043FB46.mp4"
      },
      "popupMaxWidth": "95%",
      "id": "popup_456D0585_4AB2_DD78_41D0_1B743B283D0B",
      "loop": false,
      "rotationX": 0,
      "hideDuration": 500,
      "autoplay": true,
      "class": "PopupPanoramaOverlay",
      "pitch": 7.22
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_t.jpg",
  "label": "Ruang Depan Dewan Perwakilan Mahasiswa.jpg",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_10976D64_1F49_4F58_41BA_450A6981940F",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 9.65,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 36.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 20.4
       }
      ],
      "id": "overlay_0FCBF523_1F48_BCD9_41AD_DB98FE54F8DC",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 24)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 36.14,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.65,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 20.4
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.03,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 150.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 87,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.95
       }
      ],
      "id": "overlay_0FF07B69_1F4B_4B29_419E_4FB50AAFED31",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 150.74,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.03,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 175,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -14.95
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.94,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 8.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 87,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 39.51
       }
      ],
      "id": "overlay_3AFAFC86_37AB_8EFF_41C6_A2A4E5E9C710",
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_4B62590E_5BEB_B4FD_41C6_6250545A457D, {'pressedIconWidth':20,'paddingBottom':5,'rollOverIconWidth':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','paddingLeft':5,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','pressedBorderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedIconColor':'#888888','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'paddingRight':5}, this.ImageResource_4B2C9681_5BEB_5DE7_41C7_CD0942C11FE6, null, null, null, null, false)",
        "toolTip": "Lift di ITB STIKOM Bali dirancang untuk memudahkan mobilitas mahasiswa, dosen, staf, serta pengunjung, termasuk mereka yang memiliki kebutuhan khusus. Dengan kapasitas maksimal 3-4 orang, tergantung berat badan pengguna, lift ini memastikan perjalanan yang aman dan nyaman di dalam gedung.\u000a\u000aLift ini melayani total 4 lantai, mencakup berbagai fasilitas akademik dan administratif. Sebagai bagian dari komitmen kampus dalam menciptakan lingkungan yang inklusif, lift ini juga mempermudah akses bagi penyandang disabilitas, terutama bagi pengguna kursi roda. Dengan desain yang ergonomis dan sistem keamanan yang terjaga, fasilitas ini memberikan kenyamanan bagi seluruh civitas akademika. Selain itu, perawatan rutin dilakukan secara berkala untuk memastikan kinerja lift tetap optimal dan aman digunakan.",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 8.13,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.94,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 175,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 39.51
       }
      ]
     },
     {
      "hideDuration": 500,
      "rotationZ": 0,
      "yaw": 8.13,
      "rotationY": 0,
      "showEasing": "cubic_in",
      "hfov": 7.94,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "popupMaxWidth": "95%",
      "id": "popup_4B62590E_5BEB_B4FD_41C6_6250545A457D",
      "rotationX": 0,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 723,
         "width": 1024,
         "class": "ImageResourceLevel",
         "url": "media/popup_4B62590E_5BEB_B4FD_41C6_6250545A457D_0_2.png"
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "pitch": 39.51
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_t.jpg",
  "label": "Lift lantai 2",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_10976D64_1F49_4F58_41BA_450A6981940F_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FC98319_1958_2956_4196_CBA8074C59EE_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.05,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 97.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 87,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.53
       }
      ],
      "id": "overlay_0CB72535_19C8_695E_41A9_2F90B1A7D5C6",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 97.68,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 175,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -14.53
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 9.98,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -92.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 87,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -15.98
       }
      ],
      "id": "overlay_0E0167E5_1F48_BB59_41A8_A38C86F941F3",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -92.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.98,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 175,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -15.98
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_t.jpg",
  "label": "Ruang Akademik",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.22,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 5.36,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 87,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -10.14
       }
      ],
      "id": "overlay_0F9B4067_19C8_27FA_41B2_2C30A70C2875",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 5.36,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.22,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 175,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -10.14
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_t.jpg",
  "label": "Langkah Pertama Menuju Lab.Multimedia",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "partial": false,
     "id": "panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130",
       "backwardYaw": -89.12,
       "class": "AdjacentPanorama",
       "yaw": 130.24,
       "distance": 1
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_t.jpg",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 10.25,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 130.24,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 86,
              "width": 86,
              "class": "ImageResourceLevel",
              "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": 5.58
          }
         ],
         "id": "overlay_0A45F00C_1A0B_12B4_41AF_1FC19CE244D6",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130, this.camera_675BD862_69FD_26D6_41C3_5B27BEBD126B); this.mainPlayList.set('selectedIndex', 15)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 130.24,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.25,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 173,
              "width": 173,
              "class": "ImageResourceLevel",
              "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 5.58
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 10.23,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 161.19,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 86,
              "width": 86,
              "class": "ImageResourceLevel",
              "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": 6.33
          }
         ],
         "id": "overlay_44CB8206_4B52_D778_41C6_8E78282880C0",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 16, this.audio_44BB5482_4B52_B378_41C8_965C66C5ADC7)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 161.19,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.23,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 173,
              "width": 173,
              "class": "ImageResourceLevel",
              "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_0_HS_1_0.png"
             }
            ]
           },
           "pitch": 6.33
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "class": "ImageResourceLevel",
          "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF.jpeg"
         }
        ]
       }
      }
     ],
     "vfov": 180,
     "hfovMin": 60,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_t.jpg",
     "label": "Lab.Multimedia",
     "class": "Panorama",
     "hfovMax": 120
    },
    "backwardYaw": 130.24,
    "class": "AdjacentPanorama",
    "yaw": -89.12,
    "distance": 1
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.28,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -89.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 3.52
       }
      ],
      "id": "overlay_1530C077_1A09_7355_414B_19761FA102A7",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF, this.camera_6679CA41_69FD_3AD2_41D6_81ACBA3040ED); this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -89.12,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 3.52
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_t.jpg",
  "label": "langkah Kedua menuju Lab.Multimedia",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_109ECB1D_1938_F949_419B_6BBDA6838247_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 1,
  "manualRotationSpeed": 268,
  "class": "PanoramaCamera"
 },
 "this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_1099D97F_1938_19CA_41AD_212C3809B1AC",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_1099D97F_1938_19CA_41AD_212C3809B1AC.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_t.jpg",
  "label": "Langkah Kedua menuju Toilet dan Musholla di Lantai 2",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.3,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 0.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 87,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.19
       }
      ],
      "id": "overlay_0F7FDE3B_1A09_EEDD_41AA_9E724943EB1A",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 23)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 0.63,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 175,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -7.19
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 9.08,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 82.4,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 28.16
       }
      ],
      "id": "overlay_16F0050E_1AAC_F8CB_41B5_78E31642A7C5",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 29)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 82.4,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.08,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 28.16
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_t.jpg",
  "label": "Tangga Ke Lantai 4-2",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.3,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 86.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 87,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.12
       }
      ],
      "id": "overlay_0CE721EF_1A0F_3575_41B9_43A7A97C2587",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 25)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 86.01,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 175,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -7.12
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_t.jpg",
  "label": "Lantai 3",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "partial": false,
     "id": "panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA",
       "backwardYaw": 32.98,
       "class": "AdjacentPanorama",
       "yaw": 30.51,
       "distance": 1
      },
      {
       "panorama": {
        "partial": false,
        "id": "panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD",
          "backwardYaw": -159.89,
          "class": "AdjacentPanorama",
          "yaw": -84.18,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_t.jpg",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 10.33,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 78.33,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "width": 87,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -6.09
             }
            ],
            "id": "overlay_1501C16F_1AD7_BB49_41A1_FEBD102FB822",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 31)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 78.33,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.33,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 173,
                 "width": 175,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -6.09
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 10.14,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -84.18,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 87,
                 "width": 86,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -9.98
             }
            ],
            "id": "overlay_11F520A2_1F39_55D8_4184_BB5F2F815630",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD, this.camera_6762E80E_69FD_266E_41C1_52FBDFF3D7CF); this.mainPlayList.set('selectedIndex', 28)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -84.18,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.14,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 175,
                 "width": 173,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -9.98
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "class": "ImageResourceLevel",
             "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0.jpeg"
            }
           ]
          }
         }
        ],
        "vfov": 180,
        "hfovMin": 60,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_t.jpg",
        "label": "Lantai 4-2",
        "class": "Panorama",
        "hfovMax": 120
       },
       "backwardYaw": -84.18,
       "class": "AdjacentPanorama",
       "yaw": -159.89,
       "distance": 1
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_t.jpg",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 9.78,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 30.51,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 86,
              "width": 86,
              "class": "ImageResourceLevel",
              "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": 18.21
          }
         ],
         "id": "overlay_13FB43EB_1F38_BB29_4191_D6156D5D3E09",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA, this.camera_66FBD981_69FD_2652_41D2_B918C8ED3F5C); this.mainPlayList.set('selectedIndex', 24)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 30.51,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.78,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 173,
              "width": 173,
              "class": "ImageResourceLevel",
              "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 18.21
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 10.08,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -159.89,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 87,
              "width": 86,
              "class": "ImageResourceLevel",
              "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -11.76
          }
         ],
         "id": "overlay_124C0213_1F3B_74F9_41B2_C3CB661FD1A2",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0, this.camera_66CA6995_69FD_2672_41D3_0CA664D0366D); this.mainPlayList.set('selectedIndex', 30)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -159.89,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.08,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 175,
              "width": 173,
              "class": "ImageResourceLevel",
              "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -11.76
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "class": "ImageResourceLevel",
          "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD.jpeg"
         }
        ]
       }
      }
     ],
     "vfov": 180,
     "hfovMin": 60,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_t.jpg",
     "label": "Lift Lantai 4",
     "class": "Panorama",
     "hfovMax": 120
    },
    "backwardYaw": 30.51,
    "class": "AdjacentPanorama",
    "yaw": 32.98,
    "distance": 1
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 9.58,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -161.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 87,
           "class": "ImageResourceLevel",
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -22.77
       }
      ],
      "id": "overlay_11CB52FB_1F38_F52F_417A_14FEA19B8889",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 23)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -161.7,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.58,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 175,
           "class": "ImageResourceLevel",
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -22.77
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.11,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 32.98,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 11
       }
      ],
      "id": "overlay_109E0ADE_1F39_D56B_4194_ECD9D25AB4E2",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD, this.camera_67AFF7A0_69FD_2A52_41D6_82D3E471D916); this.mainPlayList.set('selectedIndex', 28)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 32.98,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 11
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.23,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -0.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 87,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 6.29
       }
      ],
      "id": "overlay_3A143879_37B8_7615_41B4_A5766AC1773E",
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "Lift di ITB STIKOM Bali dirancang untuk memudahkan mobilitas mahasiswa, dosen, staf, serta pengunjung, termasuk mereka yang memiliki kebutuhan khusus. Dengan kapasitas maksimal 3-4 orang, tergantung berat badan pengguna, lift ini memastikan perjalanan yang aman dan nyaman di dalam gedung.\u000a\u000aLift ini melayani total 4 lantai, mencakup berbagai fasilitas akademik dan administratif. Sebagai bagian dari komitmen kampus dalam menciptakan lingkungan yang inklusif, lift ini juga mempermudah akses bagi penyandang disabilitas, terutama bagi pengguna kursi roda. Dengan desain yang ergonomis dan sistem keamanan yang terjaga, fasilitas ini memberikan kenyamanan bagi seluruh civitas akademika. Selain itu, perawatan rutin dilakukan secara berkala untuk memastikan kinerja lift tetap optimal dan aman digunakan.",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -0.79,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.23,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 175,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 6.29
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_t.jpg",
  "label": "Lift Lantai 3",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.21,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -8.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 87,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -10.55
       }
      ],
      "id": "overlay_168B17F2_1AAD_C75B_418D_F2A115D9F8B2",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -8.78,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 175,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -10.55
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_t.jpg",
  "label": "Langkah ke 2 menuju lab Programming-2",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_10A71934_1938_195E_41B3_0309FAD7BA52",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_10A71934_1938_195E_41B3_0309FAD7BA52_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_10A71934_1938_195E_41B3_0309FAD7BA52_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_10A71934_1938_195E_41B3_0309FAD7BA52.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_10A71934_1938_195E_41B3_0309FAD7BA52_t.jpg",
  "label": "Lab.Programming",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_10A71934_1938_195E_41B3_0309FAD7BA52_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_1098E60C_1938_EB4E_419D_A499CEAB628C",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2160,
       "width": 3840,
       "class": "ImageResourceLevel",
       "url": "media/panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_hq.jpeg"
      },
      {
       "height": 1809,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_1098E60C_1938_EB4E_419D_A499CEAB628C.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_t.jpg",
  "label": "Lab. Web Technology-2",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.29,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 101.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -1.84
       }
      ],
      "id": "overlay_14319853_1AD5_C959_419C_79AB693B13E9",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 23)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 101.82,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.29,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -1.84
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.31,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 6.39,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 87,
           "class": "ImageResourceLevel",
           "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.85
       }
      ],
      "id": "overlay_141D76A0_1AD4_D9F7_4187_1D2D203C4350",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 30)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 6.39,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.31,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 175,
           "class": "ImageResourceLevel",
           "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -6.85
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_t.jpg",
  "label": "Lantai Terakhir",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_1099382C_193B_E74E_4194_4648FBC8CA15",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 9.47,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 1.2,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 23.08
       }
      ],
      "id": "overlay_0AFB871C_1AD4_58CF_41A5_99F857C8E40E",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 32)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 1.2,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 23.08
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15_t.jpg",
  "label": "Pintu Depan Aula",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_1099382C_193B_E74E_4194_4648FBC8CA15_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.27,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 1.89,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 87,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 4.02
       }
      ],
      "id": "overlay_3A4FA7FD_37A8_BA0D_41A5_C830F93F0084",
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B, {'pressedIconWidth':20,'paddingBottom':5,'rollOverIconWidth':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','paddingLeft':5,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','pressedBorderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedIconColor':'#888888','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'paddingRight':5}, this.ImageResource_54D3887E_5BD5_551D_41B3_5A4B9DA66396, null, null, null, null, false)",
        "toolTip": " Aula Kampus ITB STIKOM Bali  \u000a\u000a1. **Kapasitas Fleksibel**  \u000a   Aula kampus dilengkapi dengan **50 kursi yang dapat disesuaikan** sesuai kebutuhan, mendukung berbagai kegiatan akademik maupun non-akademik.  \u000a\u000a2. **Ruangan Luas dan Multifungsi**  \u000a   Aula memiliki **ruang yang luas**, cocok untuk berbagai kegiatan seperti **seminar, pelatihan, rapat organisasi, kegiatan UKM, dan acara kampus lainnya**.  \u000a\u000a3. **Sistem Pendingin yang Optimal**  \u000a   Dilengkapi dengan **8 unit AC**, memastikan suhu ruangan tetap nyaman selama kegiatan berlangsung.  \u000a\u000a4. **Fasilitas Audio-Visual**  \u000a   Aula kampus juga didukung dengan **proyektor, layar presentasi, dan sistem audio berkualitas**, mendukung kelancaran presentasi dan acara lainnya.  \u000a\u000a5. **Pencahayaan yang Baik**  \u000a   Menggunakan sistem pencahayaan yang memadai, mendukung kenyamanan dalam berbagai kegiatan, baik formal maupun non-formal.  \u000a\u000a6. **Akses Listrik dan Internet**  \u000a   Dilengkapi dengan **beberapa titik stop kontak** dan **akses Wi-Fi kampus**, memungkinkan mahasiswa dan tamu untuk tetap terhubung selama acara.  \u000a\u000a7. **Desain Interior yang Representatif**  \u000a   Aula didesain dengan konsep yang profesional dan nyaman, menciptakan suasana yang kondusif untuk pembelajaran dan interaksi sosial.  \u000a",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 1.89,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.27,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 175,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 4.02
       }
      ]
     },
     {
      "hideDuration": 500,
      "rotationZ": 0,
      "yaw": 1.89,
      "rotationY": 0,
      "showEasing": "cubic_in",
      "hfov": 10.27,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "popupMaxWidth": "95%",
      "id": "popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B",
      "rotationX": 0,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 723,
         "width": 1024,
         "class": "ImageResourceLevel",
         "url": "media/popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B_0_2.png"
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "pitch": 4.02
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_t.jpg",
  "label": "Aula",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_1099859C_1938_294F_41AA_B658622986F1",
  "hfov": 360,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_1099859C_1938_294F_41AA_B658622986F1_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 9.41,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -157.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "class": "ImageResourceLevel",
           "url": "media/panorama_1099859C_1938_294F_41AA_B658622986F1_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 23.97
       }
      ],
      "id": "overlay_3A1E037F_36A9_9A0D_41B8_90F18E32E98F",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78, {'pressedIconWidth':20,'paddingBottom':5,'rollOverIconWidth':20,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','paddingLeft':5,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','pressedBorderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedIconColor':'#888888','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'paddingRight':5}, this.ImageResource_6517FE22_69ED_7A56_41C4_4342298163E6, null, null, null, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -157.49,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 173,
           "class": "ImageResourceLevel",
           "url": "media/panorama_1099859C_1938_294F_41AA_B658622986F1_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 23.97
       }
      ]
     },
     {
      "hideDuration": 500,
      "rotationZ": 0,
      "yaw": -157.49,
      "rotationY": 0,
      "showEasing": "cubic_in",
      "hfov": 9.41,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "popupMaxWidth": "95%",
      "id": "popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78",
      "rotationX": 0,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 723,
         "width": 1024,
         "class": "ImageResourceLevel",
         "url": "media/popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78_0_2.png"
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "pitch": 23.97
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_1099859C_1938_294F_41AA_B658622986F1_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_1099859C_1938_294F_41AA_B658622986F1.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_1099859C_1938_294F_41AA_B658622986F1_t.jpg",
  "label": "Ruang Kelas",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_1099859C_1938_294F_41AA_B658622986F1_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/video_8B678B38_87F9_7F99_41DA_4050DE3A575A_t.jpg",
  "label": "Pengenalan Kampus ITB STIKOM Bali",
  "class": "Video",
  "video": {
   "height": 1080,
   "width": 1920,
   "class": "VideoResource",
   "mp4Url": "media/video_8B678B38_87F9_7F99_41DA_4050DE3A575A.mp4"
  },
  "width": 1920,
  "id": "video_8B678B38_87F9_7F99_41DA_4050DE3A575A",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464"
 },
 {
  "thumbnailUrl": "media/video_0E928F34_038D_B7E6_415C_D046B5012510_t.jpg",
  "label": "Pengenalan Kampus ITB STIKOM Bali",
  "class": "Video",
  "video": {
   "height": 1080,
   "width": 1920,
   "class": "VideoResource",
   "mp4Url": "media/video_0E928F34_038D_B7E6_415C_D046B5012510.mp4"
  },
  "width": 1920,
  "id": "video_0E928F34_038D_B7E6_415C_D046B5012510",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "thumbnailUrl": "media/video_0DF3228A_0396_AEA2_4170_E28BA043FB46_t.jpg",
  "label": "Apa itu UKM",
  "class": "Video",
  "video": {
   "height": 1080,
   "width": 1920,
   "class": "VideoResource",
   "mp4Url": "media/video_0DF3228A_0396_AEA2_4170_E28BA043FB46.mp4"
  },
  "width": 1920,
  "id": "video_0DF3228A_0396_AEA2_4170_E28BA043FB46",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "thumbnailUrl": "media/album_4B29E45B_4687_0A4A_41CB_46B35037E405_t.png",
  "label": "Photo Album pintu depan loby",
  "class": "PhotoAlbum",
  "id": "album_4B29E45B_4687_0A4A_41CB_46B35037E405",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_4B29E45B_4687_0A4A_41CB_46B35037E405_AlbumPlayList",
   "items": [
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1
      },
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.42",
       "class": "PhotoCameraPosition",
       "y": "0.64",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "easing": "linear",
      "class": "MovementPhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "duration": 5000,
      "class": "Photo",
      "thumbnailUrl": "media/album_4B29E45B_4687_0A4A_41CB_46B35037E405_0_t.png",
      "label": "pintu depan loby",
      "width": 3508,
      "id": "album_4B29E45B_4687_0A4A_41CB_46B35037E405_0",
      "height": 2480,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_4B29E45B_4687_0A4A_41CB_46B35037E405_0.png"
        }
       ]
      }
     }
    }
   ]
  }
 },
 {
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464"
 },
 "this.album_4B29E45B_4687_0A4A_41CB_46B35037E405_0",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, false, -1, this.effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, false, -1, this.effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, false, -1, this.effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, false, -1, this.effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A, 'hideEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, false, -1, this.effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938, 'hideEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, false, -1, this.effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938, 'hideEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, false, -1, this.effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D, 'hideEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, false, -1, this.effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, false, -1, this.effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, false, -1, this.effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, false, -1, this.effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, false, -1, this.effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, false, -1, this.effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, false, -1, this.effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634, 'hideEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, false, -1, this.effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC, 'hideEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, false, -1, this.effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC, 'hideEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, false, -1, this.effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0, 'hideEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, false, -1, this.effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0, 'hideEffect', false); if(this.existsKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2')){ if(this.getKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2')) { this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, true, -1, this.effect_58006734_4BB1_5D98_41CF_317A7496F898, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, false, -1, this.effect_667B6A42_69FD_3AD6_41CA_C55936206B70, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2'); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, false, -1, this.effect_4B8170AA_5BFB_7525_41BC_6FD71250837C, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, false, -1, this.effect_4B8170AA_5BFB_7525_41BC_6FD71250837C, 'hideEffect', false)",
    "begin": "this.registerKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2', this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE82ECD_4BB3_4C88_41D2_A77CD75AFB38, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, true, -1, this.effect_5AE80ECD_4BB3_4C88_4136_CB4E9BA8A372, 'showEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, true, -1, this.effect_5AE8CECD_4BB3_4C88_41D1_4F44EDD2121F, 'showEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, true, -1, this.effect_5AE97ECD_4BB3_4C88_41CE_06C54EF7B617, 'showEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, true, -1, this.effect_5AEBDECE_4BB3_4C88_41D1_260E9AD558DE, 'showEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, true, -1, this.effect_5AEBBECE_4BB3_4C88_41CC_67CB25DF731E, 'showEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, true, -1, this.effect_5AEB9ECE_4BB3_4C88_41CE_8B02800BD915, 'showEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, true, -1, this.effect_5AE86ECE_4BB3_4C88_41BA_296838D20AD3, 'showEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, true, -1, this.effect_5AE83ECF_4BB3_4C88_41CB_580655F08EA6, 'showEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, true, -1, this.effect_5AE81ECF_4BB3_4C88_41C3_6B8E2B667B95, 'showEffect', false); this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, true, -1, this.effect_58006734_4BB1_5D98_41CF_317A7496F898, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, true, -1, this.effect_4B8160A9_5BFB_7526_41D2_6BFF135623FB, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109B0239_1938_2B56_41B0_AB329B348192_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_109B0239_1938_2B56_41B0_AB329B348192",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10976D64_1F49_4F58_41BA_450A6981940F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_10976D64_1F49_4F58_41BA_450A6981940F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247",
    "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 19, this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "media": "this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "media": "this.panorama_1099D97F_1938_19CA_41AD_212C3809B1AC",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "media": "this.panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "media": "this.panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "media": "this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "media": "this.panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10A71934_1938_195E_41B3_0309FAD7BA52_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "media": "this.panorama_10A71934_1938_195E_41B3_0309FAD7BA52",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
    "media": "this.panorama_1098E60C_1938_EB4E_419D_A499CEAB628C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
    "media": "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
    "media": "this.panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
    "media": "this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1099382C_193B_E74E_4194_4648FBC8CA15_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
    "media": "this.panorama_1099382C_193B_E74E_4194_4648FBC8CA15",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
    "media": "this.panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1099859C_1938_294F_41AA_B658622986F1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
    "media": "this.panorama_1099859C_1938_294F_41AA_B658622986F1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 34, 35)",
    "media": "this.video_8B678B38_87F9_7F99_41DA_4050DE3A575A",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 34, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 34, this.video_8B678B38_87F9_7F99_41DA_4050DE3A575A)"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 35, 36)",
    "media": "this.video_0E928F34_038D_B7E6_415C_D046B5012510",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 35, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 35, this.video_0E928F34_038D_B7E6_415C_D046B5012510)"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 36, 37)",
    "media": "this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 36, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 36, this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46)"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 0)",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_4B29E45B_4687_0A4A_41CB_46B35037E405",
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist",
  "items": [
   {
    "camera": "this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, false, -1, this.effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, false, -1, this.effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, false, -1, this.effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, false, -1, this.effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A, 'hideEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, false, -1, this.effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938, 'hideEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, false, -1, this.effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938, 'hideEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, false, -1, this.effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D, 'hideEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, false, -1, this.effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, false, -1, this.effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, false, -1, this.effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, false, -1, this.effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, false, -1, this.effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, false, -1, this.effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, false, -1, this.effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634, 'hideEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, false, -1, this.effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC, 'hideEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, false, -1, this.effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC, 'hideEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, false, -1, this.effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0, 'hideEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, false, -1, this.effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0, 'hideEffect', false); if(this.existsKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2')){ if(this.getKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2')) { this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, true, -1, this.effect_58006734_4BB1_5D98_41CF_317A7496F898, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, false, -1, this.effect_66727A49_69FD_3AD2_41D4_EC63A8465657, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2'); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, false, -1, this.effect_4B8170AA_5BFB_7525_41BC_6FD71250837C, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, false, -1, this.effect_4B8170AA_5BFB_7525_41BC_6FD71250837C, 'hideEffect', false)",
    "begin": "this.registerKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2', this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2.get('visible')); this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 0, 1); this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE82ECD_4BB3_4C88_41D2_A77CD75AFB38, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, true, -1, this.effect_5AE80ECD_4BB3_4C88_4136_CB4E9BA8A372, 'showEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, true, -1, this.effect_5AE8CECD_4BB3_4C88_41D1_4F44EDD2121F, 'showEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, true, -1, this.effect_5AE97ECD_4BB3_4C88_41CE_06C54EF7B617, 'showEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, true, -1, this.effect_5AEBDECE_4BB3_4C88_41D1_260E9AD558DE, 'showEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, true, -1, this.effect_5AEBBECE_4BB3_4C88_41CC_67CB25DF731E, 'showEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, true, -1, this.effect_5AEB9ECE_4BB3_4C88_41CE_8B02800BD915, 'showEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, true, -1, this.effect_5AE86ECE_4BB3_4C88_41BA_296838D20AD3, 'showEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, true, -1, this.effect_5AE83ECF_4BB3_4C88_41CB_580655F08EA6, 'showEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, true, -1, this.effect_5AE81ECF_4BB3_4C88_41C3_6B8E2B667B95, 'showEffect', false); this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, true, -1, this.effect_58006734_4BB1_5D98_41CF_317A7496F898, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, true, -1, this.effect_4B8160A9_5BFB_7526_41D2_6BFF135623FB, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 1, 2)",
    "media": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109B0239_1938_2B56_41B0_AB329B348192_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 2, 3)",
    "media": "this.panorama_109B0239_1938_2B56_41B0_AB329B348192",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 3, 4)",
    "media": "this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 4, 5)",
    "media": "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 5, 6)",
    "media": "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 6, 7)",
    "media": "this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 7, 8)",
    "media": "this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 8, 9)",
    "media": "this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 9, 10)",
    "media": "this.panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 10, 11)",
    "media": "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10976D64_1F49_4F58_41BA_450A6981940F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 11, 12)",
    "media": "this.panorama_10976D64_1F49_4F58_41BA_450A6981940F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 12, 13)",
    "media": "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 13, 14)",
    "media": "this.panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 14, 15)",
    "media": "this.panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 15, 16)",
    "media": "this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 16, 17)",
    "media": "this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 17, 18)",
    "media": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 18, 19)",
    "media": "this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 19, 20)",
    "media": "this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247",
    "start": "this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 19, this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 20, 21)",
    "media": "this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 21, 22)",
    "media": "this.panorama_1099D97F_1938_19CA_41AD_212C3809B1AC",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 22, 23)",
    "media": "this.panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 23, 24)",
    "media": "this.panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 24, 25)",
    "media": "this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 25, 26)",
    "media": "this.panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_10A71934_1938_195E_41B3_0309FAD7BA52_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 26, 27)",
    "media": "this.panorama_10A71934_1938_195E_41B3_0309FAD7BA52",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 27, 28)",
    "media": "this.panorama_1098E60C_1938_EB4E_419D_A499CEAB628C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 28, 29)",
    "media": "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 29, 30)",
    "media": "this.panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 30, 31)",
    "media": "this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1099382C_193B_E74E_4194_4648FBC8CA15_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 31, 32)",
    "media": "this.panorama_1099382C_193B_E74E_4194_4648FBC8CA15",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 32, 33)",
    "media": "this.panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1099859C_1938_294F_41AA_B658622986F1_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 33, 34)",
    "media": "this.panorama_1099859C_1938_294F_41AA_B658622986F1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 34, 35)",
    "media": "this.video_8B678B38_87F9_7F99_41DA_4050DE3A575A",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 34, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 34, this.video_8B678B38_87F9_7F99_41DA_4050DE3A575A)"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 35, 36)",
    "media": "this.video_0E928F34_038D_B7E6_415C_D046B5012510",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 35, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 35, this.video_0E928F34_038D_B7E6_415C_D046B5012510)"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 36, 37)",
    "media": "this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 36, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 36, this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 37, 0)",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_4B29E45B_4687_0A4A_41CB_46B35037E405",
    "player": "this.MainViewerPhotoAlbumPlayer"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_64AFDDEB_69ED_79D7_41CD_DEA2F56F746D",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid64E88D64_69ED_7ED1_41C1_72C03072ABD6VideoPlayer)",
    "media": "this.video_0E928F34_038D_B7E6_415C_D046B5012510",
    "player": {
     "displayPlaybackBar": true,
     "class": "VideoPlayer",
     "id": "viewer_uid64E88D64_69ED_7ED1_41C1_72C03072ABD6VideoPlayer",
     "viewerArea": {
      "playbackBarBottom": 0,
      "minHeight": 50,
      "toolTipFontWeight": "normal",
      "progressHeight": 10,
      "playbackBarHeadBorderRadius": 0,
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "toolTipShadowSpread": 0,
      "minWidth": 100,
      "toolTipFontFamily": "Arial",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressOpacity": 1,
      "progressLeft": 0,
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowVerticalLength": 0,
      "toolTipOpacity": 1,
      "playbackBarBorderSize": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadShadowColor": "#000000",
      "progressBorderSize": 0,
      "progressRight": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadWidth": 6,
      "playbackBarLeft": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBorderSize": 0,
      "paddingRight": 0,
      "paddingTop": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "playbackBarHeadShadow": true,
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipPaddingLeft": 6,
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "playbackBarRight": 0,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingBottom": 4,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipFontStyle": "normal",
      "height": "100%",
      "progressBorderRadius": 0,
      "width": "100%",
      "progressBackgroundOpacity": 1,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "progressBarBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadHeight": 15,
      "progressBarBorderSize": 0,
      "class": "ViewerArea",
      "toolTipFontSize": 12,
      "playbackBarHeadShadowHorizontalLength": 0,
      "transitionMode": "blending",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipTextShadowBlurRadius": 3,
      "borderSize": 0,
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowOpacity": 1,
      "progressBarBorderColor": "#000000",
      "paddingLeft": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "id": "viewer_uid643E76A4_69FD_2A52_41C7_6D3CB71E806F",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarHeadOpacity": 1,
      "progressBackgroundColorDirection": "vertical",
      "toolTipFontColor": "#606060",
      "playbackBarProgressBorderColor": "#000000"
     },
     "buttonPause": "this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464"
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid64E88D64_69ED_7ED1_41C1_72C03072ABD6VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_64AFDDEB_69ED_79D7_41CD_DEA2F56F746D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_64AFDDEB_69ED_79D7_41CD_DEA2F56F746D, 0, this.video_0E928F34_038D_B7E6_415C_D046B5012510)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_64AC4DEC_69ED_79D2_41AB_479F7397B2E3",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid64ED6D6E_69ED_7EAE_41D9_9A869A34DAA9VideoPlayer)",
    "media": "this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46",
    "player": {
     "displayPlaybackBar": true,
     "class": "VideoPlayer",
     "id": "viewer_uid64ED6D6E_69ED_7EAE_41D9_9A869A34DAA9VideoPlayer",
     "viewerArea": {
      "playbackBarBottom": 0,
      "minHeight": 50,
      "toolTipFontWeight": "normal",
      "progressHeight": 10,
      "playbackBarHeadBorderRadius": 0,
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "toolTipShadowSpread": 0,
      "minWidth": 100,
      "toolTipFontFamily": "Arial",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressOpacity": 1,
      "progressLeft": 0,
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowVerticalLength": 0,
      "toolTipOpacity": 1,
      "playbackBarBorderSize": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadShadowColor": "#000000",
      "progressBorderSize": 0,
      "progressRight": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadWidth": 6,
      "playbackBarLeft": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBorderSize": 0,
      "paddingRight": 0,
      "paddingTop": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "playbackBarHeadShadow": true,
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipPaddingLeft": 6,
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "playbackBarRight": 0,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingBottom": 4,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipFontStyle": "normal",
      "height": "100%",
      "progressBorderRadius": 0,
      "width": "100%",
      "progressBackgroundOpacity": 1,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "progressBarBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadHeight": 15,
      "progressBarBorderSize": 0,
      "class": "ViewerArea",
      "toolTipFontSize": 12,
      "playbackBarHeadShadowHorizontalLength": 0,
      "transitionMode": "blending",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipTextShadowBlurRadius": 3,
      "borderSize": 0,
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowOpacity": 1,
      "progressBarBorderColor": "#000000",
      "paddingLeft": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "id": "viewer_uid643066A8_69FD_2A52_41D7_3B91285312EF",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarHeadOpacity": 1,
      "progressBackgroundColorDirection": "vertical",
      "toolTipFontColor": "#606060",
      "playbackBarProgressBorderColor": "#000000"
     },
     "buttonPause": "this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464"
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid64ED6D6E_69ED_7EAE_41D9_9A869A34DAA9VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_64AC4DEC_69ED_79D2_41AB_479F7397B2E3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_64AC4DEC_69ED_79D2_41AB_479F7397B2E3, 0, this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46)"
   }
  ]
 },
 "this.popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A",
 {
  "class": "ImageResource",
  "id": "ImageResource_49BCA3A4_469F_0EFE_41D0_04BEB03F9865",
  "levels": [
   {
    "height": 2480,
    "width": 3508,
    "class": "ImageResourceLevel",
    "url": "media/popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A_0_0.png"
   },
   {
    "height": 1447,
    "width": 2048,
    "class": "ImageResourceLevel",
    "url": "media/popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A_0_1.png"
   },
   {
    "height": 723,
    "width": 1024,
    "class": "ImageResourceLevel",
    "url": "media/popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A_0_2.png"
   },
   {
    "height": 361,
    "width": 512,
    "class": "ImageResourceLevel",
    "url": "media/popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A_0_3.png"
   }
  ]
 },
 {
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "minHeight": 20,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "modal": true,
  "footerHeight": 5,
  "scrollBarColor": "#000000",
  "layout": "vertical",
  "minWidth": 20,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontSize": 14,
  "titlePaddingLeft": 5,
  "closeButtonPaddingTop": 5,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingBottom": 0,
  "headerPaddingBottom": 5,
  "backgroundOpacity": 1,
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "closeButtonPaddingLeft": 5,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingLeft": 0,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingRight": 5,
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "titleFontFamily": "Arial",
  "scrollBarOpacity": 0.5,
  "backgroundColorRatios": [],
  "shadow": true,
  "closeButtonIconWidth": 20,
  "headerPaddingTop": 10,
  "contentOpaque": false,
  "headerBackgroundOpacity": 0,
  "paddingRight": 0,
  "footerBackgroundOpacity": 0,
  "children": [
   "this.viewer_uid643E76A4_69FD_2A52_41C7_6D3CB71E806F"
  ],
  "paddingBottom": 0,
  "borderRadius": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconLineWidth": 5,
  "titlePaddingTop": 5,
  "closeButtonRollOverIconColor": "#666666",
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerPaddingRight": 0,
  "closeButtonRollOverBorderSize": 0,
  "gap": 10,
  "class": "Window",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonBorderSize": 0,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarWidth": 10,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonPressedBorderSize": 0,
  "bodyPaddingTop": 0,
  "close": "this.PlayList_64AFDDEB_69ED_79D7_41CD_DEA2F56F746D.set('selectedIndex', -1);; this.resumeGlobalAudios()",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "horizontalAlign": "center",
  "shadowSpread": 1,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "id": "window_6003C15D_69D3_26F2_4197_AF378C0BFF20",
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "headerBackgroundColorDirection": "vertical",
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "headerPaddingLeft": 10,
  "closeButtonRollOverBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "scrollBarMargin": 2,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5
 },
 "this.popup_577B9DF6_468F_3A5A_41C5_27F4B9282923",
 "this.popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD",
 {
  "class": "ImageResource",
  "id": "ImageResource_54C5AA0C_4683_39CE_41CF_2A26B5A16BF5",
  "levels": [
   {
    "height": 2480,
    "width": 3508,
    "class": "ImageResourceLevel",
    "url": "media/popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD_0_0.png"
   },
   {
    "height": 1447,
    "width": 2048,
    "class": "ImageResourceLevel",
    "url": "media/popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD_0_1.png"
   },
   {
    "height": 723,
    "width": 1024,
    "class": "ImageResourceLevel",
    "url": "media/popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD_0_2.png"
   },
   {
    "height": 361,
    "width": 512,
    "class": "ImageResourceLevel",
    "url": "media/popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD_0_3.png"
   }
  ]
 },
 "this.popup_452C6691_4AB3_DC98_41B9_E112963125A7",
 {
  "class": "ImageResource",
  "id": "ImageResource_5B484BFF_4B53_5488_41CB_0210827413D8",
  "levels": [
   {
    "height": 2480,
    "width": 3508,
    "class": "ImageResourceLevel",
    "url": "media/popup_452C6691_4AB3_DC98_41B9_E112963125A7_0_0.png"
   },
   {
    "height": 1447,
    "width": 2048,
    "class": "ImageResourceLevel",
    "url": "media/popup_452C6691_4AB3_DC98_41B9_E112963125A7_0_1.png"
   },
   {
    "height": 723,
    "width": 1024,
    "class": "ImageResourceLevel",
    "url": "media/popup_452C6691_4AB3_DC98_41B9_E112963125A7_0_2.png"
   },
   {
    "height": 361,
    "width": 512,
    "class": "ImageResourceLevel",
    "url": "media/popup_452C6691_4AB3_DC98_41B9_E112963125A7_0_3.png"
   }
  ]
 },
 {
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "minHeight": 20,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "modal": true,
  "footerHeight": 5,
  "scrollBarColor": "#000000",
  "layout": "vertical",
  "minWidth": 20,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontSize": 14,
  "titlePaddingLeft": 5,
  "closeButtonPaddingTop": 5,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingBottom": 0,
  "headerPaddingBottom": 5,
  "backgroundOpacity": 1,
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "closeButtonPaddingLeft": 5,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingLeft": 0,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingRight": 5,
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "titleFontFamily": "Arial",
  "scrollBarOpacity": 0.5,
  "backgroundColorRatios": [],
  "shadow": true,
  "closeButtonIconWidth": 20,
  "headerPaddingTop": 10,
  "contentOpaque": false,
  "headerBackgroundOpacity": 0,
  "paddingRight": 0,
  "footerBackgroundOpacity": 0,
  "children": [
   "this.viewer_uid643066A8_69FD_2A52_41D7_3B91285312EF"
  ],
  "paddingBottom": 0,
  "borderRadius": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverIconLineWidth": 5,
  "titlePaddingTop": 5,
  "closeButtonRollOverIconColor": "#666666",
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerPaddingRight": 0,
  "closeButtonRollOverBorderSize": 0,
  "gap": 10,
  "class": "Window",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonBorderSize": 0,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarWidth": 10,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonPressedBorderSize": 0,
  "bodyPaddingTop": 0,
  "close": "this.PlayList_64AC4DEC_69ED_79D2_41AB_479F7397B2E3.set('selectedIndex', -1);; this.resumeGlobalAudios()",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "horizontalAlign": "center",
  "shadowSpread": 1,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "id": "window_601EA159_69D3_26F2_41CA_021B2A71BFCF",
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "headerBackgroundColorDirection": "vertical",
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "headerPaddingLeft": 10,
  "closeButtonRollOverBorderColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "scrollBarMargin": 2,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5
 },
 "this.popup_456D0585_4AB2_DD78_41D0_1B743B283D0B",
 "this.popup_4B62590E_5BEB_B4FD_41C6_6250545A457D",
 {
  "class": "ImageResource",
  "id": "ImageResource_4B2C9681_5BEB_5DE7_41C7_CD0942C11FE6",
  "levels": [
   {
    "height": 2480,
    "width": 3508,
    "class": "ImageResourceLevel",
    "url": "media/popup_4B62590E_5BEB_B4FD_41C6_6250545A457D_0_0.png"
   },
   {
    "height": 1447,
    "width": 2048,
    "class": "ImageResourceLevel",
    "url": "media/popup_4B62590E_5BEB_B4FD_41C6_6250545A457D_0_1.png"
   },
   {
    "height": 723,
    "width": 1024,
    "class": "ImageResourceLevel",
    "url": "media/popup_4B62590E_5BEB_B4FD_41C6_6250545A457D_0_2.png"
   },
   {
    "height": 361,
    "width": 512,
    "class": "ImageResourceLevel",
    "url": "media/popup_4B62590E_5BEB_B4FD_41C6_6250545A457D_0_3.png"
   }
  ]
 },
 {
  "id": "audio_44BB5482_4B52_B378_41C8_965C66C5ADC7",
  "audio": {
   "oggUrl": "media/audio_44BB5482_4B52_B378_41C8_965C66C5ADC7.ogg",
   "mp3Url": "media/audio_44BB5482_4B52_B378_41C8_965C66C5ADC7.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio",
  "autoplay": true
 },
 "this.popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B",
 {
  "class": "ImageResource",
  "id": "ImageResource_54D3887E_5BD5_551D_41B3_5A4B9DA66396",
  "levels": [
   {
    "height": 2480,
    "width": 3508,
    "class": "ImageResourceLevel",
    "url": "media/popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B_0_0.png"
   },
   {
    "height": 1447,
    "width": 2048,
    "class": "ImageResourceLevel",
    "url": "media/popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B_0_1.png"
   },
   {
    "height": 723,
    "width": 1024,
    "class": "ImageResourceLevel",
    "url": "media/popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B_0_2.png"
   },
   {
    "height": 361,
    "width": 512,
    "class": "ImageResourceLevel",
    "url": "media/popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B_0_3.png"
   }
  ]
 },
 "this.popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78",
 {
  "class": "ImageResource",
  "id": "ImageResource_6517FE22_69ED_7A56_41C4_4342298163E6",
  "levels": [
   {
    "height": 2480,
    "width": 3508,
    "class": "ImageResourceLevel",
    "url": "media/popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78_0_0.png"
   },
   {
    "height": 1447,
    "width": 2048,
    "class": "ImageResourceLevel",
    "url": "media/popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78_0_1.png"
   },
   {
    "height": 723,
    "width": 1024,
    "class": "ImageResourceLevel",
    "url": "media/popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78_0_2.png"
   },
   {
    "height": 361,
    "width": 512,
    "class": "ImageResourceLevel",
    "url": "media/popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78_0_3.png"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 69.6,
   "pitch": 0
  },
  "id": "camera_67EC3710_69FD_2A72_41A8_338E38F04774",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 136.38,
   "pitch": 0
  },
  "id": "camera_67E2E725_69FD_2A52_41C3_4F57655DCD41",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.58,
   "pitch": 0
  },
  "id": "camera_67FCF73A_69FD_2AB6_41D1_8B8B87B174F5",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.4,
   "pitch": 0
  },
  "id": "camera_67F5474E_69FD_2AEF_41C3_E839EBD7CB4A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.68,
   "pitch": 0
  },
  "id": "camera_67CF2763_69FD_2AD7_41BE_DE0368652C3B",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -84.22,
   "pitch": 0
  },
  "id": "camera_67D8E777_69FD_2ABE_41C2_1D3542641525",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.93,
   "pitch": 0
  },
  "id": "camera_67D3D78C_69FD_2A52_4188_E1E3FFA93995",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -149.49,
   "pitch": 0
  },
  "id": "camera_67AFF7A0_69FD_2A52_41D6_82D3E471D916",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.56,
   "pitch": 0
  },
  "id": "camera_67BCC7B5_69FD_29B2_41D1_2274F6F18803",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -99.75,
   "pitch": 0
  },
  "id": "camera_678AB7CA_69FD_29D6_41D7_E95AB6CE017A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -170.91,
   "pitch": 0
  },
  "id": "camera_678717DF_69FD_29EE_41CF_AD73F6B17B75",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -62.96,
   "pitch": 0
  },
  "id": "camera_6795E7F8_69FD_29B2_41D5_5ECEC2D36102",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 222,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 20.11,
   "pitch": 0
  },
  "id": "camera_6762E80E_69FD_266E_41C1_52FBDFF3D7CF",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.44,
   "pitch": 0
  },
  "id": "camera_6770C82A_69FD_2656_41AA_F853437BCF1E",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 147.16,
   "pitch": 0
  },
  "id": "camera_674F5840_69FD_26D2_41A0_4FB488261ED8",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.88,
   "pitch": 0
  },
  "id": "camera_675BD862_69FD_26D6_41C3_5B27BEBD126B",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -31.46,
   "pitch": 0
  },
  "id": "camera_672A488C_69FD_2652_41D7_36FE75A8DEBD",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.15,
   "pitch": 0
  },
  "id": "camera_672748B4_69FD_27B2_41D0_520C207B5D2E",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.54,
   "pitch": 0
  },
  "id": "camera_6735A8E4_69FD_27D1_41BC_68BAAD5A2FF4",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.21,
   "pitch": 0
  },
  "id": "camera_6704690D_69FD_2652_41D6_0C8709EE4F05",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 123.37,
   "pitch": 0
  },
  "id": "camera_67108938_69FD_26B2_41C8_0853FE05B2CC",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -75.91,
   "pitch": 0
  },
  "id": "camera_66EEC961_69FD_26D2_41D0_1472D3F512D6",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.02,
   "pitch": 0
  },
  "id": "camera_66FBD981_69FD_2652_41D2_B918C8ED3F5C",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 95.82,
   "pitch": 0
  },
  "id": "camera_66CA6995_69FD_2672_41D3_0CA664D0366D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 157.15,
   "pitch": 0
  },
  "id": "camera_66C709AD_69FD_2652_41D3_30766DAFDF72",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 95.47,
   "pitch": 0
  },
  "id": "camera_66D599C1_69FD_39D2_41C4_6117AD47413A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 106.5,
   "pitch": 0
  },
  "id": "camera_66A4C9D6_69FD_39FE_41D1_4A60C9415C50",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -35.55,
   "pitch": 0
  },
  "id": "camera_66B1A9EB_69FD_39D6_41D2_111ECE28080D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.17,
   "pitch": 0
  },
  "id": "camera_66801A00_69FD_3A51_41A2_FB36D70DBFB0",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -25.76,
   "pitch": 0
  },
  "id": "camera_669DDA15_69FD_3A73_41C8_41CEF9DA7E39",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.88,
   "pitch": 0
  },
  "id": "camera_666C3A2B_69FD_3A56_41BC_F26BF267F300",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 1,
  "manualRotationSpeed": 268,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.76,
   "pitch": 0
  },
  "id": "camera_6679CA41_69FD_3AD2_41D6_81ACBA3040ED",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AE82ECD_4BB3_4C88_41D2_A77CD75AFB38"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_5AE80ECD_4BB3_4C88_4136_CB4E9BA8A372"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_5AE8CECD_4BB3_4C88_41D1_4F44EDD2121F"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_5AE97ECD_4BB3_4C88_41CE_06C54EF7B617"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_5AEBDECE_4BB3_4C88_41D1_260E9AD558DE"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_5AEBBECE_4BB3_4C88_41CC_67CB25DF731E"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_5AEB9ECE_4BB3_4C88_41CE_8B02800BD915"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_5AE86ECE_4BB3_4C88_41BA_296838D20AD3"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_5AE83ECF_4BB3_4C88_41CB_580655F08EA6"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_5AE81ECF_4BB3_4C88_41C3_6B8E2B667B95"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_58006734_4BB1_5D98_41CF_317A7496F898"
 },
 "this.effect_58006734_4BB1_5D98_41CF_317A7496F898",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_667B6A42_69FD_3AD6_41CA_C55936206B70"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_4B8160A9_5BFB_7526_41D2_6BFF135623FB"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_4B8170AA_5BFB_7525_41BC_6FD71250837C"
 },
 "this.effect_5AE82ECD_4BB3_4C88_41D2_A77CD75AFB38",
 "this.effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C",
 "this.effect_5AE80ECD_4BB3_4C88_4136_CB4E9BA8A372",
 "this.effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA",
 "this.effect_5AE8CECD_4BB3_4C88_41D1_4F44EDD2121F",
 "this.effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A",
 "this.effect_5AE97ECD_4BB3_4C88_41CE_06C54EF7B617",
 "this.effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938",
 "this.effect_5AEBDECE_4BB3_4C88_41D1_260E9AD558DE",
 "this.effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D",
 "this.effect_5AEBBECE_4BB3_4C88_41CC_67CB25DF731E",
 "this.effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD",
 "this.effect_5AEB9ECE_4BB3_4C88_41CE_8B02800BD915",
 "this.effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925",
 "this.effect_5AE86ECE_4BB3_4C88_41BA_296838D20AD3",
 "this.effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634",
 "this.effect_5AE83ECF_4BB3_4C88_41CB_580655F08EA6",
 "this.effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC",
 "this.effect_5AE81ECF_4BB3_4C88_41C3_6B8E2B667B95",
 "this.effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0",
 "this.effect_58006734_4BB1_5D98_41CF_317A7496F898",
 "this.effect_58006734_4BB1_5D98_41CF_317A7496F898",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_66727A49_69FD_3AD2_41D4_EC63A8465657"
 },
 "this.effect_4B8160A9_5BFB_7526_41D2_6BFF135623FB",
 "this.effect_4B8170AA_5BFB_7525_41BC_6FD71250837C",
 {
  "duration": 5000,
  "class": "Photo",
  "thumbnailUrl": "media/photo_48E8D131_4685_0BD6_41C8_9748465E9CD5_t.png",
  "label": "pintu depan loby",
  "width": 3508,
  "id": "photo_48E8D131_4685_0BD6_41C8_9748465E9CD5",
  "height": 2480,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_48E8D131_4685_0BD6_41C8_9748465E9CD5.png"
    }
   ]
  }
 }
], "children": [
 {
  "playbackBarBottom": 5,
  "minHeight": 50,
  "toolTipFontWeight": "normal",
  "progressHeight": 10,
  "playbackBarHeadBorderRadius": 0,
  "progressBarOpacity": 1,
  "progressBottom": 0,
  "toolTipShadowSpread": 0,
  "minWidth": 100,
  "toolTipFontFamily": "Arial",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBackgroundColor": "transparent",
  "toolTipShadowBlurRadius": 0,
  "toolTipTextShadowColor": "#FFFFFF",
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "toolTipBorderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderSize": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderSize": 0,
  "paddingRight": 0,
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "playbackBarHeadShadow": true,
  "toolTipBorderRadius": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipPaddingLeft": 6,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "playbackBarRight": 0,
  "toolTipBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipFontStyle": "normal",
  "height": "100%",
  "progressBorderRadius": 0,
  "width": "100%",
  "progressBackgroundOpacity": 1,
  "toolTipPaddingTop": 4,
  "shadow": false,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "toolTipFontSize": 24,
  "playbackBarHeadShadowHorizontalLength": 0,
  "borderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipTextShadowBlurRadius": 0,
  "transitionMode": "fade_out_fade_in",
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowOpacity": 0,
  "top": 0,
  "progressBarBorderColor": "#000000",
  "paddingLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "id": "MainViewer",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarOpacity": 1,
  "playbackBarBorderRadius": 0,
  "toolTipShadowColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "left": 0,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBorderColor": "#000000"
 },
 {
  "paddingBottom": 0,
  "minHeight": 0,
  "right": "3%",
  "mode": "toggle",
  "width": 40,
  "height": 40,
  "minWidth": 0,
  "class": "IconButton",
  "pressedIconURL": "skin/IconButton_5B5900F0_4B51_D498_4190_2794D2688452_pressed.png",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "iconURL": "skin/IconButton_5B5900F0_4B51_D498_4190_2794D2688452.png",
  "top": "5.2%",
  "cursor": "hand",
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "transparencyActive": true,
  "id": "IconButton_5B5900F0_4B51_D498_4190_2794D2688452",
  "horizontalAlign": "center",
  "paddingTop": 0,
  "shadow": false,
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "paddingBottom": 0,
  "minHeight": 0,
  "right": "11.92%",
  "mode": "push",
  "width": 32,
  "height": 32,
  "minWidth": 0,
  "class": "IconButton",
  "pressedIconURL": "skin/IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714_pressed.png",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "iconURL": "skin/IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714.png",
  "top": "25.43%",
  "cursor": "hand",
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "transparencyActive": true,
  "id": "IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714",
  "horizontalAlign": "center",
  "rollOverIconURL": "skin/IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714_rollover.png",
  "paddingTop": 0,
  "shadow": false,
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "paddingBottom": 0,
  "minHeight": 0,
  "right": "11.79%",
  "mode": "push",
  "width": 32,
  "height": 32,
  "minWidth": 0,
  "class": "IconButton",
  "pressedIconURL": "skin/IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656_pressed.png",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "iconURL": "skin/IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656.png",
  "top": "33.48%",
  "cursor": "hand",
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "transparencyActive": true,
  "id": "IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656",
  "horizontalAlign": "center",
  "rollOverIconURL": "skin/IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656_rollover.png",
  "paddingTop": 0,
  "shadow": false,
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "pressedIconHeight": 40,
  "paddingBottom": 0,
  "minHeight": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "fontSize": 12,
  "mode": "toggle",
  "width": 58,
  "iconWidth": 40,
  "height": 58,
  "pressedBackgroundOpacity": 0,
  "minWidth": 0,
  "textDecoration": "none",
  "layout": "horizontal",
  "class": "Button",
  "pressedIconURL": "skin/Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464_pressed.png",
  "gap": 0,
  "rollOverIconHeight": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "iconURL": "skin/Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464.png",
  "fontWeight": "normal",
  "fontFamily": "Arial",
  "borderColor": "#000000",
  "cursor": "hand",
  "verticalAlign": "middle",
  "iconHeight": 40,
  "rollOverIconWidth": 40,
  "paddingLeft": 0,
  "pressedIconWidth": 40,
  "horizontalAlign": "center",
  "id": "Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464",
  "fontStyle": "normal",
  "bottom": "9.05%",
  "shadowColor": "#000000",
  "rollOverBackgroundOpacity": 0,
  "left": "47.11%",
  "paddingTop": 0,
  "shadowSpread": 1,
  "backgroundColorDirection": "vertical",
  "fontColor": "#FFFFFF",
  "shadow": false,
  "iconBeforeLabel": true,
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "pressedIconHeight": 40,
  "paddingBottom": 0,
  "minHeight": 0,
  "right": "44.51%",
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "fontSize": 12,
  "mode": "push",
  "width": 40.65,
  "iconWidth": 40,
  "height": 41.75,
  "pressedBackgroundOpacity": 0,
  "minWidth": 0,
  "textDecoration": "none",
  "layout": "horizontal",
  "class": "Button",
  "pressedIconURL": "skin/Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D_pressed.png",
  "gap": 0,
  "rollOverIconHeight": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "iconURL": "skin/Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D.png",
  "fontWeight": "normal",
  "fontFamily": "Arial",
  "borderColor": "#000000",
  "cursor": "hand",
  "verticalAlign": "middle",
  "iconHeight": 40,
  "rollOverIconWidth": 40,
  "paddingLeft": 0,
  "pressedIconWidth": 40,
  "bottom": "10.2%",
  "id": "Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D",
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "shadowColor": "#000000",
  "rollOverBackgroundOpacity": 0,
  "paddingTop": 0,
  "shadowSpread": 1,
  "backgroundColorDirection": "vertical",
  "fontColor": "#FFFFFF",
  "shadow": false,
  "iconBeforeLabel": true,
  "rollOverIconURL": "skin/Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D_rollover.png",
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "pressedIconHeight": 40,
  "paddingBottom": 0,
  "minHeight": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "fontSize": 12,
  "mode": "push",
  "width": 38.4,
  "iconWidth": 40,
  "height": 37.6,
  "pressedBackgroundOpacity": 0,
  "minWidth": 0,
  "textDecoration": "none",
  "layout": "horizontal",
  "class": "Button",
  "pressedIconURL": "skin/Button_5B8D543D_4B4F_B388_41B6_AD893F62387B_pressed.png",
  "gap": 0,
  "rollOverIconHeight": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "iconURL": "skin/Button_5B8D543D_4B4F_B388_41B6_AD893F62387B.png",
  "fontWeight": "normal",
  "fontFamily": "Arial",
  "borderColor": "#000000",
  "cursor": "hand",
  "verticalAlign": "middle",
  "iconHeight": 40,
  "rollOverIconWidth": 40,
  "paddingLeft": 0,
  "pressedIconWidth": 40,
  "horizontalAlign": "center",
  "id": "Button_5B8D543D_4B4F_B388_41B6_AD893F62387B",
  "fontStyle": "normal",
  "bottom": "10.78%",
  "shadowColor": "#000000",
  "rollOverBackgroundOpacity": 0,
  "left": "43.32%",
  "paddingTop": 0,
  "shadowSpread": 1,
  "backgroundColorDirection": "vertical",
  "fontColor": "#FFFFFF",
  "shadow": false,
  "iconBeforeLabel": true,
  "rollOverIconURL": "skin/Button_5B8D543D_4B4F_B388_41B6_AD893F62387B_rollover.png",
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "pressedIconHeight": 40,
  "paddingBottom": 0,
  "minHeight": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "fontSize": 12,
  "mode": "push",
  "width": 40,
  "iconWidth": 40,
  "height": 43.3,
  "pressedBackgroundOpacity": 0,
  "minWidth": 0,
  "textDecoration": "none",
  "layout": "horizontal",
  "class": "Button",
  "pressedIconURL": "skin/Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718_pressed.png",
  "gap": 0,
  "rollOverIconHeight": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "iconURL": "skin/Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718.png",
  "fontWeight": "normal",
  "fontFamily": "Arial",
  "borderColor": "#000000",
  "cursor": "hand",
  "verticalAlign": "middle",
  "iconHeight": 40,
  "rollOverIconWidth": 40,
  "paddingLeft": 0,
  "pressedIconWidth": 40,
  "horizontalAlign": "center",
  "id": "Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718",
  "fontStyle": "normal",
  "bottom": "19.4%",
  "shadowColor": "#000000",
  "rollOverBackgroundOpacity": 0,
  "left": "47.8%",
  "paddingTop": 0,
  "shadowSpread": 1,
  "backgroundColorDirection": "vertical",
  "fontColor": "#FFFFFF",
  "shadow": false,
  "iconBeforeLabel": true,
  "rollOverIconURL": "skin/Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718_rollover.png",
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "pressedIconHeight": 40,
  "paddingBottom": 0,
  "minHeight": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "fontSize": 12,
  "mode": "push",
  "width": 40,
  "iconWidth": 40,
  "height": 40,
  "pressedBackgroundOpacity": 0,
  "minWidth": 0,
  "textDecoration": "none",
  "layout": "horizontal",
  "class": "Button",
  "pressedIconURL": "skin/Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED_pressed.png",
  "gap": 0,
  "rollOverIconHeight": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "iconURL": "skin/Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED.png",
  "fontWeight": "normal",
  "fontFamily": "Arial",
  "borderColor": "#000000",
  "cursor": "hand",
  "verticalAlign": "middle",
  "iconHeight": 40,
  "rollOverIconWidth": 40,
  "paddingLeft": 0,
  "pressedIconWidth": 40,
  "horizontalAlign": "center",
  "id": "Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED",
  "fontStyle": "normal",
  "bottom": "1.58%",
  "shadowColor": "#000000",
  "rollOverBackgroundOpacity": 0,
  "left": "47.99%",
  "paddingTop": 0,
  "shadowSpread": 1,
  "backgroundColorDirection": "vertical",
  "fontColor": "#FFFFFF",
  "shadow": false,
  "iconBeforeLabel": true,
  "rollOverIconURL": "skin/Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED_rollover.png",
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "pressedIconHeight": 40,
  "paddingBottom": 0,
  "minHeight": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "fontSize": 12,
  "mode": "push",
  "width": 40,
  "iconWidth": 40,
  "height": 40,
  "pressedBackgroundOpacity": 0,
  "minWidth": 0,
  "textDecoration": "none",
  "layout": "horizontal",
  "class": "Button",
  "pressedIconURL": "skin/Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8_pressed.png",
  "gap": 0,
  "rollOverIconHeight": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "iconURL": "skin/Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8.png",
  "fontWeight": "normal",
  "fontFamily": "Arial",
  "borderColor": "#000000",
  "cursor": "hand",
  "verticalAlign": "middle",
  "iconHeight": 40,
  "rollOverIconWidth": 40,
  "paddingLeft": 0,
  "pressedIconWidth": 40,
  "horizontalAlign": "center",
  "id": "Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8",
  "fontStyle": "normal",
  "bottom": "10.32%",
  "shadowColor": "#000000",
  "rollOverBackgroundOpacity": 0,
  "left": "38.39%",
  "paddingTop": 0,
  "shadowSpread": 1,
  "backgroundColorDirection": "vertical",
  "fontColor": "#FFFFFF",
  "shadow": false,
  "iconBeforeLabel": true,
  "rollOverIconURL": "skin/Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8_rollover.png",
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "pressedIconHeight": 40,
  "paddingBottom": 0,
  "minHeight": 0,
  "right": "39.72%",
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "fontSize": 12,
  "mode": "push",
  "width": 40,
  "iconWidth": 40,
  "height": 40,
  "pressedBackgroundOpacity": 0,
  "minWidth": 0,
  "textDecoration": "none",
  "layout": "horizontal",
  "class": "Button",
  "pressedIconURL": "skin/Button_5BF55C76_4BB3_5398_41CA_6741290B2B45_pressed.png",
  "gap": 0,
  "rollOverIconHeight": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "iconURL": "skin/Button_5BF55C76_4BB3_5398_41CA_6741290B2B45.png",
  "fontWeight": "normal",
  "fontFamily": "Arial",
  "borderColor": "#000000",
  "cursor": "hand",
  "verticalAlign": "middle",
  "iconHeight": 40,
  "rollOverIconWidth": 40,
  "paddingLeft": 0,
  "pressedIconWidth": 40,
  "bottom": "10.26%",
  "id": "Button_5BF55C76_4BB3_5398_41CA_6741290B2B45",
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "shadowColor": "#000000",
  "rollOverBackgroundOpacity": 0,
  "paddingTop": 0,
  "shadowSpread": 1,
  "backgroundColorDirection": "vertical",
  "fontColor": "#FFFFFF",
  "shadow": false,
  "iconBeforeLabel": true,
  "rollOverIconURL": "skin/Button_5BF55C76_4BB3_5398_41CA_6741290B2B45_rollover.png",
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "shadow": false,
  "paddingBottom": 0,
  "minHeight": 1,
  "right": "1.22%",
  "toolTipBorderRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontWeight": "normal",
  "mode": "toggle",
  "toolTipBorderColor": "#767676",
  "width": 61,
  "toolTipTextShadowOpacity": 0,
  "toolTipFontStyle": "normal",
  "height": 49,
  "toolTipShadowSpread": 0,
  "minWidth": 1,
  "toolTipFontFamily": "Arial",
  "toolTipPaddingTop": 4,
  "toolTipPaddingBottom": 4,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "class": "IconButton",
  "toolTipFontSize": 12,
  "toolTipBorderSize": 1,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "iconURL": "skin/IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2.png",
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowOpacity": 1,
  "top": "28.33%",
  "cursor": "hand",
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "transparencyActive": true,
  "id": "IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2",
  "toolTip": "Fullscreen",
  "maxWidth": 128,
  "toolTipShadowColor": "#333333",
  "horizontalAlign": "center",
  "maxHeight": 128,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "paddingTop": 10,
  "paddingBottom": 10,
  "minHeight": 1,
  "paddingRight": 20,
  "scrollBarMargin": 2,
  "selectedItemLabelFontColor": "#FFCC00",
  "shadow": false,
  "itemHorizontalAlign": "center",
  "borderRadius": 5,
  "scrollBarColor": "#FFFFFF",
  "width": "34.914%",
  "layout": "horizontal",
  "itemLabelFontSize": 14,
  "itemLabelFontWeight": "normal",
  "height": 124.2,
  "itemPaddingRight": 3,
  "minWidth": 1,
  "itemThumbnailShadowSpread": 1,
  "itemLabelHorizontalAlign": "center",
  "gap": 13,
  "itemBackgroundOpacity": 0,
  "itemLabelTextDecoration": "none",
  "itemThumbnailOpacity": 1,
  "itemThumbnailShadowBlurRadius": 8,
  "class": "ThumbnailList",
  "itemThumbnailShadowColor": "#000000",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "itemThumbnailShadow": true,
  "itemThumbnailWidth": 100,
  "itemPaddingTop": 3,
  "bottom": "3.16%",
  "selectedItemLabelFontWeight": "bold",
  "itemBorderRadius": 0,
  "itemThumbnailShadowVerticalLength": 3,
  "paddingLeft": 20,
  "itemPaddingLeft": 3,
  "horizontalAlign": "left",
  "id": "ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71",
  "scrollBarVisible": "rollOver",
  "itemOpacity": 1,
  "itemLabelGap": 8,
  "itemMode": "normal",
  "playList": "this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist",
  "itemThumbnailHeight": 75,
  "itemLabelFontFamily": "Arial",
  "itemLabelFontStyle": "normal",
  "itemLabelPosition": "bottom",
  "itemThumbnailBorderRadius": 5,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowHorizontalLength": 3,
  "left": "0.02%",
  "verticalAlign": "top",
  "itemLabelFontColor": "#FFFFFF",
  "itemThumbnailScaleMode": "fit_outside",
  "scrollBarOpacity": 0.5,
  "rollOverItemLabelFontWeight": "bold",
  "itemThumbnailShadowOpacity": 0.57,
  "itemBackgroundColorRatios": [],
  "itemVerticalAlign": "middle",
  "itemBackgroundColor": [],
  "itemPaddingBottom": 3
 },
 {
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "paddingBottom": 0,
  "minHeight": 0,
  "right": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 0,
  "class": "UIComponent",
  "backgroundOpacity": 0.55,
  "borderSize": 0,
  "top": 0,
  "visible": false,
  "paddingLeft": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "left": 0,
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "backgroundColorRatios": [
   0
  ],
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "paddingBottom": 0,
  "minHeight": 0,
  "right": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "class": "ZoomImage",
  "backgroundOpacity": 1,
  "borderSize": 0,
  "top": 0,
  "visible": false,
  "paddingLeft": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "scaleMode": "custom",
  "left": 0,
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "backgroundColorRatios": [],
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "paddingBottom": 5,
  "minHeight": 0,
  "right": 10,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontSize": 12,
  "iconWidth": 20,
  "textDecoration": "none",
  "mode": "push",
  "layout": "horizontal",
  "minWidth": 0,
  "fontFamily": "Arial",
  "class": "CloseButton",
  "rollOverIconColor": "#666666",
  "pressedIconColor": "#888888",
  "backgroundOpacity": 0.3,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "iconLineWidth": 5,
  "gap": 5,
  "fontWeight": "normal",
  "fontStyle": "normal",
  "iconColor": "#000000",
  "top": 10,
  "cursor": "hand",
  "verticalAlign": "middle",
  "visible": false,
  "iconHeight": 20,
  "borderColor": "#000000",
  "paddingLeft": 5,
  "id": "closeButtonPopupPanorama",
  "horizontalAlign": "center",
  "shadowColor": "#000000",
  "label": "",
  "paddingTop": 5,
  "shadowSpread": 1,
  "backgroundColorDirection": "vertical",
  "fontColor": "#FFFFFF",
  "shadow": false,
  "iconBeforeLabel": true,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 0,
  "paddingRight": 5
 }
], 
 "paddingBottom": 0,
 "minHeight": 20,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "height": "100%",
 "overflow": "visible",
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452",
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "vrPolyfillScale": 0.5,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "gap": 10,
 "width": "100%",
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "getKey": function(key){  return window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } }
 },
 "paddingTop": 0,
 "start": "this.syncPlaylists([this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "paddingRight": 0
})