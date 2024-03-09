<?php

use yii\db\Migration;

/**
 * Class m221127_161427_add_full_name
 */
class m221127_161427_add_full_name extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%user}}', 'firstName', $this->string(255)->notNull()->after('id'));
        $this->addColumn('{{%user}}', 'lastName', $this->string(255)->notNull()->after('firstName'));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%user}}', 'firstName');
        $this->dropColumn('{{%user}}', 'lastName');
    }
}
