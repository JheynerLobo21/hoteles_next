import { SxProps, Theme } from '@mui/material';

  export const mainApp: SxProps<Theme> = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6rem',
      minHeight: '100vh',
      backgroundColor: '#eee',
      color: 'rgb(31, 30, 30)',
    }
  
  export const mainHotelItem: SxProps<Theme>={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'black',
    rowGap: '50px',
    marginTop: '20px',
}

  export const rateStyles: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '150px',
    width: 12.5,
  }

  export const imgHotel: SxProps<Theme> = {
    borderRadius: 200,
    width: 200,
    height: 200,
    objectFit: 'cover', 
}

export const descriptionHotelStyles: SxProps<Theme> =  ({
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    flexDirection: 'row',
    rowGap: '20px',
    textAlign: 'center',
    marginTop: '-30px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  });
  
  export const reviewsStyles: SxProps<Theme> = ({
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    flexDirection: 'row',
    rowGap: '20px',
    textAlign: 'center',
    marginTop: '-30px',
    '@media (max-width: 768px)': {
      textAlign: 'start',
    },
  });
  
  export const dataHotel: SxProps<Theme> = {
    display: 'flex',
    flexDirection:'column',
    marginLeft: '22px',
    position:'relative',
    width:'100%',
    '@media (max-width: 768px)': {
        marginLeft: 0,
        flexDirection: 'column',
    }, 
  };
  
  export const infoHotel: SxProps<Theme> = ({
    paddingLeft: '20px',
    '@media (max-width: 768px)': {
      paddingLeft: 0,
    },
  });

export const boxStyles: SxProps<Theme> = {
    backgroundColor: 'primary.main',
    padding: 4,
    borderRadius: 2,
    boxShadow: 3,
    '&:hover': {
      backgroundColor: 'secondary.main',
      transform: 'scale(1.05)',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      padding: 2, 
    }
  };

  export const itemHotel: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 0,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  };
  
  export const cardDataHotel: SxProps<Theme> = {
    borderRadius: '5px',
    marginBottom: '15px',
    width: '80vw',
    padding: '0 22px',
  };
  
  export const nameRating: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    columnGap: '9px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  };
  
  export const titleHotel: SxProps<Theme> = {
    color: '#2724db',
    fontSize: '30px',
    '&:hover': {
      color: '#04027c',
    },
  };
  
  export const containerReviews: SxProps<Theme> = {
    display: 'flex',
    width: '100%',
    padding: 0,
    '@media (max-width: 768px)': {
      flexDirection:'column',
      width: '63%',
    },
  };
  
  export const titleRateReviews: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    borderRadius: '8px 0 0 8px',
    border: '1px solid #808080',
    width: '30%',
    textOverflow: 'ellipsis',
    '@media (max-width: 768px)': {
      width: '70%',
      borderRadius: '8px 8px 0 0',
    },
  };
  
  export const btnAddReview: SxProps<Theme> = {
    color: '#fff',
    position: 'absolute',
    top: '50px',
    right:'127px',
    backgroundColor:"#2724db",
    width:"160px"
  };
  
  export const cardReview: SxProps<Theme> = {
    border: 'none',
    boxShadow: 'none',
    borderRadius: '5px',
    marginBottom: '15px',
    width: '100%',
    padding: '0',
  };
  
  export const descriptionReview: SxProps<Theme> = {
    border: '1px solid #808080',
    borderRadius: '0 8px 8px 0',
    marginRight: '1px',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    textOverflow: 'ellipsis',
    position:'relative',
    '@media (max-width: 768px)': {
      borderRadius: '0 0 8px 8px',
      marginTop: '-1px',
      height: '100px',
      overflow: 'scroll',
      padding: '0 10px',
      textAlign: 'center',
    },
  };
  
  export const txtTitleDescriptionReview: SxProps<Theme> = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#3a3a3a',
  };

  export const txtDescriptionReview: SxProps<Theme> = {
      marginTop: '10px',
  };
  
  export const form: SxProps<Theme> = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px',
  };
  
  export const reviewField: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 'auto',
  };
  
  export const scoreReview: SxProps<Theme> = {
    textAlign: 'center',
  };
  
  export const containerBtnNewReview: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  export const btnNewReview: SxProps<Theme> = {
    marginTop: '15px',
    backgroundColor: '#2724db',
    color: '#fff',
    borderRadius: '6px',
    padding: '10px 16px',
    width: '100px',
  };
  
  export const titleApp: SxProps<Theme> = {
    marginTop: '-50px',
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '28px',
  };
  
  export const close: SxProps<Theme> = {
    position: 'absolute',
    right: '28px',
    top: '15px',
    cursor: 'pointer',
  };
  
  export const titleModal: SxProps<Theme> = {
    marginTop: '-10px',
    marginBottom: '14px',
  };

  export const contentModal: SxProps<Theme> = {
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  export const divScoreReview: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }

  export const addNewReview: SxProps<Theme> = {
    position: 'absolute',
    right: '0',
    top:'-10px',
    marginBottom: '30px',
    background: '#2724db',
    color: '#fff',
    padding: '1px 5px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#04027c',
    },
  };

  export const btnEditButton: SxProps<Theme>={
    position: 'absolute',
    right: '0',
    top: '0',
    marginTop:"2px",
    borderRadius: '4px',
    width:"10px",
    height:"30px",
    '&:hover': {
      color:'#2724db',
    },
  }

  export const btnDeleteButton:SxProps<Theme>={
    position: 'absolute',
    right: '10px',
    top: '0',
    marginTop:"2px",
    borderRadius: '4px',
    width:"10px",
    height:"30px",
    '&:hover': {
      color:'#2724db',
    },
  }

  export const listReviews: SxProps<Theme> = {
    position: 'relative',
    marginBottom: '20px',
    width: '100%',
  };

  export const titleAdd: SxProps<Theme> = {
    marginRight: '5px',
  };

  export const breadchumbs: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'start',
    width: '80%',
  };

  export const style: SxProps<Theme> = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };