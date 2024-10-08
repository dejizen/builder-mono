import { DejiArticleData } from "./components/builderComps/dejiArticle";
import { DejiButtonData } from "./components/builderComps/dejiButton";
import { DejiIconDate } from "./components/builderComps/dejiIcon";
import { DejiIFrameData } from "./components/builderComps/dejiIFrame";
import { DejiLinkData } from "./components/builderComps/dejiLink";
import { DejiTitleData } from "./components/builderComps/dejiTitle";
import { DejiVideoData } from "./components/builderComps/dejiVideo";
import { DejiComponent } from "./components/render";

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
