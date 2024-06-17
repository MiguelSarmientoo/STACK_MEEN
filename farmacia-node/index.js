const express = require('express');
const sequelize = require('./db');
const Especialidad = require('./models/Especialidad');
const TipoMedic = require('./models/TipoMedic');
const Laboratorio = require('./models/Laboratorio');
const Medicamento = require('./models/Medicamento');
const OrdenVenta = require('./models/OrdenVenta');
const DetalleOrdenVenta = require('./models/DetalleOrdenVenta');
const OrdenCompra = require('./models/OrdenCompra');
const DetalleOrdenCompra = require('./models/DetalleOrdenCompra');

const especialidadRoutes = require('./routes/especialidad');
const tipoMedicRoutes = require('./routes/tipoMedic');
const laboratorioRoutes = require('./routes/laboratorio');
const medicamentoRoutes = require('./routes/medicamento');
const ordenVentaRoutes = require('./routes/ordenVenta');
const detalleOrdenVentaRoutes = require('./routes/detalleOrdenVenta');
const ordenCompraRoutes = require('./routes/ordenCompra');
const detalleOrdenCompraRoutes = require('./routes/detalleOrdenCompra');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/especialidades', especialidadRoutes);
app.use('/tiposMedic', tipoMedicRoutes);
app.use('/laboratorios', laboratorioRoutes);
app.use('/medicamentos', medicamentoRoutes);
app.use('/ordenesVenta', ordenVentaRoutes);
app.use('/detallesOrdenVenta', detalleOrdenVentaRoutes);
app.use('/ordenesCompra', ordenCompraRoutes);
app.use('/detallesOrdenCompra', detalleOrdenCompraRoutes);

// Sincronizar modelos y arrancar servidor
sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });
