import { DejiComponent } from "@repo/builder/render";
import { DejiArticleData } from "@repo/builder/ui/dejiArticle";
import { DejiButtonData } from "@repo/builder/ui/dejiButton";
import { DejiIconDate } from "@repo/builder/ui/dejiIcon";
import { DejiIFrameData } from "@repo/builder/ui/dejiIFrame";
import { DejiLinkData } from "@repo/builder/ui/dejiLink";
import { DejiTitleData } from "@repo/builder/ui/dejiTitle";
import { DejiVideoData } from "@repo/builder/ui/dejiVideo";

export const COMPONENTS = [
  new DejiComponent({
    name: "dejiMain",
    props: {
      children: [
        new DejiComponent<DejiButtonData>({
          name: "dejiButton",
          props: new DejiButtonData({ label: "BUTTON" }),
        }),
        new DejiComponent<DejiIconDate>({
          name: "dejiIcon",
          props: new DejiIconDate({ iconName: "home" }),
        }),
        new DejiComponent<DejiLinkData>({
          name: "dejiLink",
          props: new DejiLinkData({ text: "LINK", target: "_blank" }),
        }),
        new DejiComponent<DejiTitleData>({
          name: "dejiTitle",
          props: new DejiTitleData({ tag: "h2", text: "TITLE" }),
        }),
        new DejiComponent<DejiLinkData>({
          name: "dejiArticle",
          props: {
            isHorizontal: true,
            children: [
              new DejiComponent<DejiButtonData>({
                name: "dejiButton",
                props: new DejiButtonData({ label: "BUTTON" }),
              }),
              new DejiComponent<DejiButtonData>({
                name: "dejiButton",
                props: new DejiButtonData({ label: "BUTTON" }),
              }),
              new DejiComponent<DejiLinkData>({
                name: "dejiArticle",
                props: {
                  isHorizontal: true,
                  children: [
                    new DejiComponent<DejiButtonData>({
                      name: "dejiButton",
                      props: new DejiButtonData({ label: "BUTTON" }),
                    }),
                    new DejiComponent<DejiButtonData>({
                      name: "dejiButton",
                      props: new DejiButtonData({ label: "BUTTON" }),
                    }),
                    new DejiComponent<DejiArticleData>({
                      name: "dejiArticle",
                      props: new DejiArticleData({
                        isHorizontal: true,
                        children: [
                          new DejiComponent<DejiVideoData>({
                            name: "dejiVideo",
                            props: new DejiVideoData({
                              source: [
                                {
                                  url: "https://vjs.zencdn.net/v/oceans.mp4",
                                  type: "video/mp4",
                                },
                              ],
                            }),
                          }),
                          new DejiComponent<DejiButtonData>({
                            name: "dejiButton",
                            props: new DejiButtonData({ label: "BUTTON" }),
                          }),
                        ],
                      }),
                    }),
                  ],
                },
              }),
            ],
          },
        }),
        new DejiComponent<DejiIFrameData>({
          name: "dejiIFrame",
          props: new DejiIFrameData({
            src: "https://deluciapasquale.it",
            title: "Pako",
          }),
        }),
      ],
    },
  }),
];
