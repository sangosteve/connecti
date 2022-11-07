import supabase from "../../../supabase.config";
export default async function fetchChannels(req, res) {
  const { data, error } = await supabase.from("channels").select();
  if (error) res.status(500).json(error);
  res.status(200).json(data);
}
