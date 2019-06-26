import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

function Message(props) {
  const { classes } = props;

  function replyToMessage() {
    console.log('You can reply to the email by clicking here');
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel onClick={() =>{replyToMessage(props.messageId);}}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.name}</Typography>
          <hr/>
          {props.subject}
          <hr/>
          <Typography className={classes.secondaryHeading}>{props.formattedTime}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {props.message}
            From {props.name}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

Message.propTypes = {
  classes: PropTypes.object,
  messageId: PropTypes.string,
  name: PropTypes.string,
  subject: PropTypes.string,
  formattedTime: PropTypes.string,
  message: PropTypes.string,
};



export default withStyles(styles)(Message);
