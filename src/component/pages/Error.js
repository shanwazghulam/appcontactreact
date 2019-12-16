import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1 className="display-3">Erreur 404: Page non trouvée.</h1>
      <Link to="/list" className="nav-link">
        Retour à l'accueil
      </Link>
    </div>
  );
}
