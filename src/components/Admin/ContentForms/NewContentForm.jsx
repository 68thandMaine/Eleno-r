import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadContent } from '../../../actions';


function NewContentForm(props) {
  let _title = null;
  let _media = null;
  let _dateMade =null;
  let _category = null;
  let _description = null;
  let _dimensions = null;
  let _imageFile = null;
  let _forSale = null;
  let _price = null;

  function handleUploadingNewContent(event) {
    console.log('handleuploadingNewContent')
    event.preventDefault();
    const { dispatch } = props;
    let file = document.querySelector('#imageFile');
    dispatch(uploadContent(_title.value, _media.value,_dateMade.value, _category.value, _description.value, _dimensions.value, file.files[0], _price.value, _forSale.value));
    _title.value= '';
    _media.value= '';
    _category.value= '';
    _dateMade.value='';
    _description.value= '';
    _dimensions.value= '';
    _imageFile.value= '';
    _forSale.value='';
    _price.value= '';
  }

  const wrapperStyles = {
    backgroundColor: '#EDF0F0',
    position: 'relative',
    display: 'block',
    maxHeight: '100%',
    maxWidth: '100%',
    padding: '10px 45px 20px 45px ',
  };
  const titleStyles = {
    fontFamily: 'FoxCat',
    fontSize: '52px',
    position: 'relative',
    display: 'inline-block',
    marginBottom: '5px',
    color: 'black'
  };
  const formWrapperStyles = {
    padding: '5px 10px 0px 10px',
    backgroundColor: 'white',
    height: '750px',
    width: 'auto',
    display: 'block',
  };
  const pictureWrapperStyles = {
    display: 'grid',
    height: '25%',
    boxSizing: 'border-box',
    justifyContent: 'center',
    margin: '2% 0 10% 0'
  };
  const pictureStyles = {
    borderRadius: '50%',
    height: '160px',
    width: '160px',
    objectFit: 'fill',
    objectPosition: '50% 50%'
  };
  const formStyles = {
    position: 'relative',
    display: 'block',
    top: '-140px',
    padding: '60px',
    textAlign: 'center'
  };

  const labelStyles = {
    fontSize: '20px',
    marginTop: '10px',
    textAlign: 'left'
  };

  const buttonStyles = {
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: 'unset',
    boxSizing: 'border-box',
    color: '#ffffff',
    height: '30px',
    width: '100px',
    marginTop: '2%',
  };
  return (
    <div style={wrapperStyles}>
      <p style={titleStyles}>Portfolio Pieces</p>
      <div style={formWrapperStyles}>
        <div style={pictureWrapperStyles}>
          <img style={pictureStyles} src="https://d32dm0rphc51dk.cloudfront.net/bZs3JtXpcC8RxBXl59-w2Q/larger.jpg"/>
        </div>
        <form style={formStyles} onSubmit={handleUploadingNewContent}>

          <div style={labelStyles}>Title</div>
          <input
            type='text'
            id='title'
            ref={(input) => { _title = input; }} />

          <div style={labelStyles}>Date Created</div>
          <input
            type='text'
            id='dateMade'
            ref={(input) => { _dateMade = input; }} />

          <div style={labelStyles}>Media Used</div>
          <input
            type='text'
            id='media'
            ref={(input) => { _media = input; }} />

          <div style={labelStyles}>Category this piece belongs to</div>
          <input
            type='text'
            id='category'
            ref={(input) => { _category = input; }} />

          <div style={labelStyles}>Description of work</div>
          <input
            type='text'
            id='description'
            ref={(input) => { _description = input; }} />

          <div style={labelStyles}>Dimensions</div>
          <input
            type='text'
            id='dimensions'
            ref={(input) => { _dimensions = input; }} />

          <div style={labelStyles}>For sale</div>
          <input
            type='checkbox'
            id='forSale'
            ref={(input) => { _forSale = input; }} />

          <div style={labelStyles}>Price</div>
          <input
            type='text'
            id='price'
            ref={(input) => { _price = input; }} />
          <div style={labelStyles}>Upload Picure</div>
          <input
            type='file'
            id='imageFile'

            placeholder='Content imageFile'
            ref={(input) => { _imageFile = input; }} />
          <br/>

          <button style={buttonStyles} type='submit'>Upload new content</button>
        </form>
      </div>

    </div>
  );
}
NewContentForm.propTypes = {
  dispatch: PropTypes.func,
  uploadContent: PropTypes.object
};
NewContentForm.propTypes = {
  uploadContent: PropTypes.func
};

export default connect()(NewContentForm);
