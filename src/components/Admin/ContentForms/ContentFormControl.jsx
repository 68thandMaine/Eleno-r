import React from 'react';
import NewContentForm from './NewContentForm';
import EditContent from './EditContent';
import ContentControlButtons from './ContentControlButtons';

class ContentFormControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      viewOnPage: 'ControlButtons'
    }
    this.handleShowingNewContentForm = this.handleShowingNewContentForm.bind(this),
    this.handleShowingEditContentForm = this.handleShowingEditContentForm.bind(this)
  }

  handleShowingNewContentForm(){
    this.setState({viewOnPage: 'NewContent'})
  }
  handleShowingEditContentForm(){
    this.setState({viewOnPage: 'EditContent'})
  }

  render(){
    const wrapperStyles = {
      height: '100%',
      width: '50%',
      position: 'absolute',
      right: '0',
      top: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    const linkStyles = {
      margin: '0'
    };
    return (
      <div style={wrapperStyles}>
        <div style={linkStyles}>
          {{
            ContentControlButtons: <ContentControlButtons onUploadContent={this.handleShowingNewContentForm} onEditContent={this.handleShowingEditContentForm} />,
            NewContent: <NewContentForm />,
            EditContent: <EditContent />
          }[this.state.viewOnPage]}
        </div>
      </div>
    )
  }
}

export default ContentFormControl