import Card from './Card'; 
import '../Card.css'; 

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="dashboard-title">Panel de Administrador</h2>
      <div className="card-container">
        <Card 
          imageUrl="imagen1.jpg" 
          title="Tarjeta 1" 
          buttonText="Editar" 
          onClick={() => console.log("Editar tarjeta 1")} 
        />
        <Card 
          imageUrl="imagen2.jpg" 
          title="Tarjeta 2" 
          buttonText="Editar" 
          onClick={() => console.log("Editar tarjeta 2")} 
        />
        <Card 
          imageUrl="imagen3.jpg" 
          title="Tarjeta 3" 
          buttonText="Editar" 
          onClick={() => console.log("Editar tarjeta 3")} 
        />
        <Card 
          imageUrl="imagen4.jpg" 
          title="Tarjeta 4" 
          buttonText="Editar" 
          onClick={() => console.log("Editar tarjeta 4")} 
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
