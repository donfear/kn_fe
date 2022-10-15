import React from "react";
import {Box, Tab, Tabs as MuiTabs, Typography} from "@mui/material";
import {action, makeObservable, observable} from "mobx";
import {observer} from "mobx-react";
import {ETab} from "../../types/enums/tab.enum";
import {TabsContainer, TabsUnderLine} from "./tabs.styles";
import {withTheme, WithThemeProps} from "../../../../decorators/with-theme.decorator";

interface ITabProps extends WithThemeProps {
  tabs: { value: ETab, content?: React.ReactNode }[]
}

@withTheme()
@observer
export default class Tabs extends React.Component<ITabProps> {

  @observable selectedTab: ETab = ETab.PRODUCT;

  constructor(props: ITabProps) {
    super(props);
    makeObservable(this);
  }

  @action setSelectedTab(value: ETab) {
    this.selectedTab = value;
  }

  getTabPaddings(tab: ETab): string {
    switch (tab) {
      case ETab.PRODUCT:
        return '17px 25px 13px 26px';
      case ETab.ADDRESSES:
        return '17px 37px 13px';
      case ETab.OVERVIEW:
        return '17px 42px 13px';
    }
  }

  render() {
    let tabContent = null;

    const tabButtons = this.props.tabs.map(({value, content}, index) => {
      if (value === this.selectedTab) {
        tabContent = content;
      }

      const label = <Typography textTransform={'capitalize'} variant={'subtitle1'} fontWeight={500}>{index + 1} {value}</Typography>;
      return <Tab sx={{padding: this.getTabPaddings(value)}} disabled={!content} key={value} label={label} value={value}/>
    });

    return (
      <>
        <TabsContainer width={'max-content'}>
          <MuiTabs
            value={this.selectedTab}
            onChange={(_, value) => this.setSelectedTab(value)}
          >
            {tabButtons}
          </MuiTabs>
          <TabsUnderLine/>
        </TabsContainer>
        {tabContent}
      </>
    )
  }
}
