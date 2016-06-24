<?php
$nodeid = arg(1);
$noderefnode = node_load($nodeid);
$metatagsAll = $noderefnode->metatags;
$metatags = $metatagsAll['und'];
?>

<?php foreach ($metatags as $key => $value): ?>
    <?php $val = token_replace($value['value'], array('node' => $noderefnode)); ?>
    <meta name="<?php echo $key; ?>" content="<?php echo $val; ?>" />
<?php endforeach; ?>
