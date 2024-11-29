import './index.css';

function Afficher({ produits }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Liste des Produits</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 text-sm font-semibold">Référence</th>
              <th className="px-4 py-2 text-sm font-semibold">Nom</th>
              <th className="px-4 py-2 text-sm font-semibold">Description</th>
              <th className="px-4 py-2 text-sm font-semibold">Prix</th>
              <th className="px-4 py-2 text-sm font-semibold">Image</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-300 hover:bg-gray-100 transition duration-300"
              >
                <td className="px-4 py-2 text-sm">{item.id}</td>
                <td className="px-4 py-2 text-sm">{item.title}</td>
                <td className="px-4 py-2 text-sm">{item.description}</td>
                <td className="px-4 py-2 text-sm">{item.price} DH</td>
                <td className="px-4 py-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-auto mx-auto rounded-md"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Afficher;
