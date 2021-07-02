import React from 'react';
import { Anchor, Markdown } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { EdgeStyle, FocusStyle } from '../utils/themeDocUtils';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericGridArea,
  GenericMargin,
} from '../utils/genericPropExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  Description,
  Example,
  ExampleGroup,
  ThemeDoc,
} from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="Anchor"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Controls-Anchor&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/anchor&module=%2Fsrc%2FAnchor.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A text link"
      details="We have a separate component from the browser\nbase so we can style it. You can either set the icon and/or label properties\nor just use children."
      intrinsicElement="a"
      code={`<Anchor href="#" label="For Example" />`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>Custom title to be used by screen readers.</Description>
          <GenericA11yTitle />
        </Property>

        <Property name="alignSelf">
          <Description>
            How to align along the cross axis when contained in a Box or along
            the column axis when contained in a Grid.
          </Description>
          <GenericAlignSelf />
        </Property>

        <Property name="gridArea">
          <Description>
            The name of the area to place this inside a parent Grid.
          </Description>
          <GenericGridArea />
        </Property>

        <Property name="margin">
          <Description>
            The amount of margin around the component. An object can be
            specified to distinguish horizontal margin, vertical margin, and
            margin on a particular side.
          </Description>
          <GenericMargin />
        </Property>

        <Property name="as">
          <Description>
            The DOM tag or react component to use for the element.
          </Description>
          <Example>string</Example>
          <Example>function</Example>
        </Property>

        <Property name="color">
          <Description>
            Label color and icon color, if not specified on the icon.
          </Description>
          <Example>string</Example>
          <Example>
            <Markdown>{`{dark: string, light: string}`}</Markdown>
          </Example>
        </Property>

        <Property name="disabled">
          <Description>Whether the anchor is disabled</Description>
          <Example>true</Example>
          <Example defaultValue>false</Example>
        </Property>

        <Property name="href">
          <Description>Hyperlink reference to place in the anchor.</Description>
          <Example>"//my.com/path"</Example>
        </Property>

        <Property name="icon">
          <Description>Icon element to place in the anchor.</Description>
          <Example>{`<Add />`}</Example>
        </Property>

        <Property name="label">
          <Description>Label text to place in the anchor.</Description>
          <Example>"Add"</Example>
          <Example>{`<Box>...</Box>`}</Example>
        </Property>

        <Property name="onClick">
          <Description>
            Click handler. It can be used, for example, to add analytics and
            track who clicked in the anchor.
          </Description>
          <Example>{`( ) => { }`}</Example>
        </Property>

        <Property name="reverse">
          <Description>
            Whether an icon and label should be reversed so that the icon is at
            the end of the anchor.
          </Description>
          <Example>true</Example>
          <Example defaultValue>false</Example>
        </Property>

        <Property name="size">
          <Description>
            The font size is typically driven by the components containing this
            component. But, it can be adjusted directly via this size property,
            typically when it is not contained in a 'Heading', 'Paragraph', or
            'Text'.
          </Description>
          <ExampleGroup>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"xxlarge"</Example>
          </ExampleGroup>
          <Example>string</Example>
        </Property>

        <Property name="weight">
          <Description>Sets font-weight property for anchor.</Description>
          <ExampleGroup>
            <Example>"normal"</Example>
            <Example>"bold"</Example>
          </ExampleGroup>
          <Example>number</Example>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="anchor.color">
          <Description>
            The color of the label text and icon strokes.
          </Description>
          <Example>{`{"dark": "accent-1", "light": "brand"}`}</Example>
        </Property>

        <Property name="anchor.fontWeight">
          <Description>The font weight of the label.</Description>
          <Example defaultValue>600</Example>
        </Property>

        <Property name="anchor.textDecoration">
          <Description>
            The text decoration of the label. Refer to
            [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
            for possible values.
          </Description>
          <Example defaultValue>"none"</Example>
        </Property>

        <Property name="anchor.hover.fontWeight">
          <Description>The font weight of the label when hovering.</Description>
          <Example>number</Example>
        </Property>

        <Property name="anchor.hover.textDecoration">
          <Description>
            The text decoration of the label when hovering. Refer to
            [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
            for possible values.
          </Description>
          <Example defaultValue>"underline"</Example>
        </Property>

        <Property name="anchor.hover.extend">
          <Description>
            Any additional style for the Anchor when hovering.
          </Description>
          <Example>"any CSS"</Example>
          <Example>(props) => {}</Example>
        </Property>

        <Property name="anchor.extend">
          <Description>Any additional style for the Anchor.</Description>
          <Example>"any CSS"</Example>
          <Example>(props) => {}</Example>
        </Property>

        <Property name="text.medium.size">
          <Description>The font size of the text label.</Description>
          <Example defaultValue>"18px"</Example>
        </Property>

        <Property name="text.medium.height">
          <Description>The line height of the text label.</Description>
          <Example defaultValue>"24px"</Example>
        </Property>
        <FocusStyle />
        <EdgeStyle description="The possible sizes for margin." />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const AnchorItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Anchor as="span">Anchor</Anchor>
  </Item>
);

AnchorItem.propTypes = Item.propTypes;
