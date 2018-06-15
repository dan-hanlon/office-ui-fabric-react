import * as React from 'react';
import { ExampleCard, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';
import { SmallCardBasicExample } from './examples/Card.Small.Basic.Example';
import { MediumTallCardBasicExample } from './examples/Card.MediumTall.Basic.Example';
import { MediumWideCardBasicExample } from './examples/Card.MediumWide.Basic.Example';
const SmallCardExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Card/examples/Card.Small.Basic.Example.tsx') as string;
const MediumTallCardExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Card/examples/Card.MediumTall.Basic.Example.tsx') as string;
const MediumWideCardExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Card/examples/Card.MediumWide.Basic.Example.tsx') as string;

export class CardPage extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="DashboardCard"
        componentName="DashboardCardExample"
        exampleCards={
          <div>
            {
              <ExampleCard title="Small Card" code={SmallCardExampleCode}>
                <SmallCardBasicExample />
              </ExampleCard>
            }
            {
              <ExampleCard title="Medium Tall Card" code={MediumTallCardExampleCode}>
                <MediumTallCardBasicExample />
              </ExampleCard>
            }
            <ExampleCard title="Medium Wide Card" code={MediumWideCardExampleCode}>
              <MediumWideCardBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!@uifabric/experiments/src/components/Card/Card.types.ts')]}
          />
        }
        overview={
          <div>
            This react card is to be used with React-Grid-Layout(RGL) and will fill the RGL card size automatically.
          </div>
        }
        bestPractices={<div />}
        dos={
          <div>
            <ul>
              <li>
                We support the following card size: small, mediumTall, mediumWide and Large:import CardSize enum from
                Card.types{' '}
              </li>
              <li>
                We support the following components: "BodyText", "ThumbnailList", "Compound Button": import
                CardContentType enum from Card.types
              </li>
              <li>
                We support Priority 1 and Priority 2 to render content in the card. Use Priority 1 to render content in
                small card: import Priority enum from Card.types
              </li>
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li>
                Do not create your own <i>priority values</i>, use the <b>Priority</b> enum by importing from Card.Types
              </li>
              <li>
                Do not create your own <i>ContentType values</i>, use the <b>ContentType</b> enum by importing from
                Card.Types
              </li>
              <li>
                Do not create your own <i>card size values</i>, use the <b>CardSize</b> enum by importing from
                Card.Types
              </li>
            </ul>
          </div>
        }
      />
    );
  }
}