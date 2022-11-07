import supabase from "../../../supabase.config";
export default async function newMesage(req, res) {
  console.log(req.body?.sender_id);

  const { data, error } = await supabase
    .from("messages")
    .insert({
      sender_id: req.body?.sender_id,
      channel_id: req.body?.channelId,
      texte: req.body?.texte,
    })
    .select();

  if (error) res.status(500).json(error);
  res.status(200).json(data);
}
