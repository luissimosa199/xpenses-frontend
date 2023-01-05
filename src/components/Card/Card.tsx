import { FunctionComponent } from "react";
import { DataObject } from "../../interfaces/DataInterface";
import { StyledCard } from "./Card.styled";

import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "../containers/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { statusColor } from "../../utils/statusColor";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { statusTranslation } from "../../utils/statusTranslation";
import { parseDate } from "../../utils/parseDate";

const { REACT_APP_API_URL } = process.env;
const token = localStorage.getItem("token");

interface CardProps {
  info: DataObject;
}

const Card: FunctionComponent<CardProps> = ({ info }) => {
  const queryClient = useQueryClient();

  const deleteBill = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bills"] });
    },
    mutationFn: () => {
      return axios({
        method: "delete",
        url: `${REACT_APP_API_URL}bills/${info._id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    },
  });

  const updateBill = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bills"] });
    },

    mutationFn: () => {
      return axios({
        method: "patch",
        url: `${REACT_APP_API_URL}bills/${info._id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          ...info,
          status: info.status === "notpaid" ? "paid" : "notpaid",
        },
      });
    },
  });

  return (
    <li>
      <StyledCard background={info.status}>
        <div className="card-icon">
          <i>I</i>
        </div>
        <div className="card-exit">
          <IconButton
            onClick={() => {
              Swal.fire({
                title: "¿Quieres borrar esta factura?",
                showDenyButton: true,
                confirmButtonText: "Mantener",
                denyButtonText: "Borrar",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire("Se mantiene", "", "success");
                } else if (result.isDenied) {
                  deleteBill.mutate();
                  Swal.fire("Factura borrada", "", "warning");
                }
              });
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="card-info">
          <h4>{info.name}</h4>
          <p className="card-info-desc">{info.description}</p>
          <p className="card-info-date">{info.date}</p>
          <Button
            variant="outlined"
            color={statusColor(info.status)}
            onClick={() => {
              updateBill.mutate();
            }}
          >
            {info.status}
          </Button>
          <p className="card-info-amount">${info.amount}</p>
        </div>
        <p className="card-update">
          <IconButton
            onClick={() => {
              Swal.fire({
                title: info.name,
                text: info.description,
                html: `<table class="detail-modal-table">
                  <tbody>
                    <tr><th>Descripción</th><td>${info.description}</td></tr>
                    <tr><th>Fecha</th><td>${info.date}</td></tr>
                    <tr><th>Monto</th><td>$${info.amount}</td></tr>
                    <tr><th>Estatus</th><td>${statusTranslation(info.status)}</td></tr>
                    <tr><th>Creador por</th><td>${info.createdBy}</td></tr>
                    <tr><th>Creado</th><td>${parseDate(info.createdAt)}</td></tr>
                    <tr><th>Última actualización</th><td>${parseDate(info.updatedAt)}</td></tr>
                  <tbody>
                </table>`,
                showConfirmButton: true,
                confirmButtonText: 'Cerrar',
              });
            }}
          >
            <MoreHorizIcon />
          </IconButton>
        </p>
      </StyledCard>
    </li>
  );
};

export default Card;
