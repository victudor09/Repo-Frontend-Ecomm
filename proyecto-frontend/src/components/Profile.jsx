import React from 'react'

const Profile = () => {
  return (
    <>
   
    <section className="Profile">
        <h1>Profile</h1>
        
        <div className="profile-info">
            <h2>Información Personal</h2>
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Email:</strong> juan.perez@example.com</p>
            <p><strong>Teléfono:</strong> +34 600 123 456</p>
            <button>Editar Información</button>
        </div>
        
       {/*  <div className="edit-profile-form">
            <h2>Editar Perfil</h2>
            <form>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" value="Juan Pérez"/>
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value="juan.perez@example.com"/>
                
                <label htmlFor="phone">Teléfono:</label>
                <input type="tel" id="phone" name="phone" value="+34 600 123 456"/>
                
                <button type="submit">Guardar Cambios</button>
            </form>
        </div> */}
        
        <div className="order-history">
            <h2>Historial de Pedidos</h2>
            <ul>
                <li>Pedido #12345 - $250.00 - 01/09/2024</li>
                <li>Pedido #12344 - $150.00 - 15/08/2024</li>
                <li>Pedido #12343 - $300.00 - 01/08/2024</li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default Profile