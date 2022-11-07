import supabase from "../../../supabase.config";
export default async function fetchMesages(req, res) {
  console.log(req.query.channelId);
  const { data, error } = await supabase
    .from("messages")
    .select(`*,users(email)`)
    .eq("channel_id", req.query.channelId);

  if (error) res.status(500).json(error);
  res.status(200).json(data);
}
