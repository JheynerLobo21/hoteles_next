import { SxProps, Theme } from "@mui/material";

export const mainApp: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "6rem",
  backgroundColor: "#eef",
  color: "rgb(31, 30, 30)",
};

export const mainHotelItem: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: "black",
  rowGap: "50px",
  marginTop: "0",
  paddingTop: "20px",
  backgroundColor: "#eef",
};

export const titleHotel: SxProps<Theme> = {
  color: "#2724db",
  fontSize: "30px",
  "&:hover": {
    color: "#04027c",
  },
};

export const containerReviews: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  padding: 0,
  "@media (max-width: 768px)": {
    flexDirection: "column",
    width: "63%",
  },
};

export const titleRateReviews: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  borderRadius: "8px 0 0 8px",
  border: "1px solid #808080",
  width: "30%",
  height: "-30%",
  textOverflow: "ellipsis",
  "@media (max-width: 768px)": {
    width: "100%",
    borderRadius: "8px 8px 0 0",
  },
};

export const btnAddReview: SxProps<Theme> = {
  color: "#fff",
  position: "absolute",
  top: "-40px",
  right: "0",
  backgroundColor: "#2724db",
  width: "160px",
  "&:hover": {
    backgroundColor: "#04027c",
  },
};

export const containerAddHotels: SxProps<Theme> = {
  position: "relative",
};

export const cardReview: SxProps<Theme> = {
  boxShadow: "none",
  borderRadius: "5px",
  marginBottom: "15px",
  width: "100%",
  padding: "0",
};

export const containerEditHotel: SxProps<Theme> = {
  position: "relative",
};

export const descriptionReview: SxProps<Theme> = {
  borderRadius: "0 8px 8px 0",
  marginRight: "1px",
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "70%",
  textOverflow: "ellipsis",
  position: "relative",
  "@media (max-width: 768px)": {
    borderRadius: "0 0 8px 8px",
    marginTop: "-1px",
    height: "100px",
    overflow: "scroll",
    padding: "0 10px",
    textAlign: "center",
  },
};

export const txtTitleDescriptionReview: SxProps<Theme> = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#3a3a3a",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
};

export const txtDescriptionReview: SxProps<Theme> = {
  marginTop: "10px",
};

export const form: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "12px",
};

export const reviewField: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "auto",
};

export const scoreReview: SxProps<Theme> = {
  textAlign: "center",
};

export const containerBtnNewReview: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const btnNewReview: SxProps<Theme> = {
  marginTop: "15px",
  backgroundColor: "#2724db",
  color: "#fff",
  borderRadius: "6px",
  padding: "10px 16px",
  width: "100px",
};

export const titleApp: SxProps<Theme> = {
  marginTop: "-50px",
  marginBottom: "20px",
  textAlign: "center",
  fontSize: "28px",
};

export const close: SxProps<Theme> = {
  position: "absolute",
  right: "28px",
  top: "15px",
  cursor: "pointer",
};

export const titleModal: SxProps<Theme> = {
  marginTop: "-10px",
  marginBottom: "14px",
};

export const contentModal: SxProps<Theme> = {
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const divScoreReview: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

export const btnEditButton: SxProps<Theme> = {
  position: "absolute",
  right: "40px",
  top: "-8px",
  marginTop: "2px",
  borderRadius: "4px",
  width: "10px",
  height: "30px",
  "&:hover": {
    color: "#2724db",
  },
};

export const btnDeleteButton: SxProps<Theme> = {
  position: "absolute",
  right: "10px",
  top: "0",
  marginTop: "2px",
  borderRadius: "4px",
  width: "10px",
  height: "30px",
  "&:hover": {
    color: "#2724db",
  },
};

export const listReviews: SxProps<Theme> = {
  position: "relative",
  width: "100%",
};

export const titleAdd: SxProps<Theme> = {
  textAlign: "center",
  paddingBottom: "10px",
};

export const breadchumbs: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  alignItems: "start",
  width: "100%",
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
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};