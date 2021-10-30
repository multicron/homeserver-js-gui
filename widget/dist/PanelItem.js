/* eslint-disable react-hooks/rules-of-hooks */
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContents from '@material-ui/core/Card';
import { jsxFragment } from '@babel/types';
import { HybridComponent } from 'HybridComponent';
export class PanelItem extends HybridComponent {
  static useStyles = makeStyles(theme => ({
    card: {
      minWidth: 200
    }
  }));

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const classes = PanelItem.useStyles();

    if (this.props.noCard) {
      return /*#__PURE__*/React.createElement(Grid, {
        item: true,
        p: 5,
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 2
      }, this.props.children);
    } else {
      return /*#__PURE__*/React.createElement(Grid, {
        item: true,
        p: 5,
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 2
      }, /*#__PURE__*/React.createElement(Card, {
        className: classes.card
      }, /*#__PURE__*/React.createElement(CardContents, {
        style: {
          padding: "8px 0px"
        }
      }, this.props.children)));
    }
  }

}
export default PanelItem.functionalize();