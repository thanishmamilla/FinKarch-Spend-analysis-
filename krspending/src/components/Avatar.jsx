import { useAuth } from "../context/AuthContext";

export default function Avatar() {
  const { user } = useAuth();

  if (!user) return null; // Don't show avatar if no user is logged in

  const initial = user.username ? user.username.charAt(0).toUpperCase() : "?";

  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
        {initial}
      </div>
      {/* <span className="text-gray-700">{user.username}</span> */}
    </div>
  );
}
