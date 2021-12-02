import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { ToggleSwitch } from '@homeserver-js-gui/widget';
import { Slider } from '@homeserver-js-gui/widget';
const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 200
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));
export function TasmotaExpandable(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return /*#__PURE__*/React.createElement(Card, {
    className: classes.card
  }, /*#__PURE__*/React.createElement(CardActions, {
    disableSpacing: true
  }, /*#__PURE__*/React.createElement(ToggleSwitch, {
    name: props.name,
    broker: props.broker,
    topic: props.topic,
    field: "power",
    true_value: props.true_value,
    false_value: props.false_value
  }), /*#__PURE__*/React.createElement(IconButton, {
    className: clsx(classes.expand, {
      [classes.expandOpen]: expanded
    }),
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more"
  }, /*#__PURE__*/React.createElement(ExpandMoreIcon, null))), /*#__PURE__*/React.createElement(Collapse, {
    in: expanded,
    timeout: "auto"
  }, /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Slider, {
    name: props.name,
    caption: "Brightness",
    field: "dimmer",
    min: 0,
    max: 100,
    step: 5
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Slider, {
    name: props.name,
    caption: "Color Temperature",
    field: "color_temperature",
    min: 2000,
    max: 5000,
    step: 100,
    value: 3500
  }), " ", /*#__PURE__*/React.createElement("br", null))));
}
export default TasmotaExpandable;