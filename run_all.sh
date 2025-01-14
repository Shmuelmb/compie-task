
#!/bin/bash

echo "Starting backend..."
cd backend
npm run dev &
BACKEND_PID=$!
echo "Backend started with PID $BACKEND_PID"

echo "Starting frontend..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!
echo "Frontend started with PID $FRONTEND_PID"

wait $BACKEND_PID $FRONTEND_PID

echo "Both backend and frontend processes have finished."